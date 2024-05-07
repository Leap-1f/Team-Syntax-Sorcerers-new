import { NextRequest, NextResponse } from "next/server";
import OrderModel from "../../../models/order.model";
import { HttpStatusCode } from "axios";
import { log } from "console";
type TOrder = {
  userId: string;
  status: string;
  location: string;
  orderItems: object[];
};
async function POST(req: NextRequest) {
  try {
    const body: TOrder = await req.json();
    const order = await OrderModel.create(body);
    return NextResponse.json(
      { order, message: "Your order has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (err) {
    return { err };
  }
}
async function GET(req: NextRequest) {
  try {
    const order = await OrderModel.find().populate("location");
    if (order) {
      return NextResponse.json(order);
    }
    return NextResponse.json(
      { message: `Order not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    console.log("aldaa", error);
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export { GET };
