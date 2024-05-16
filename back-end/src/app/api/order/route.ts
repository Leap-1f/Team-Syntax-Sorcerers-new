import { NextRequest, NextResponse } from "next/server";
import OrderModel from "../../../models/order.model";
import { HttpStatusCode } from "axios";

async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const order = await OrderModel.create(body);
    return NextResponse.json(
      { order, message: "Your order has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err },
      { status: HttpStatusCode.BadRequest }
    );
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
export { GET, POST };
