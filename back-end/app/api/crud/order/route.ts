import { NextRequest, NextResponse } from "next/server";
import OrderModel from "../../models/order.model";
import { HttpStatusCode } from "axios";
export async function POST(req: NextRequest) {
  try {
    type TOrder = {
      userId: String;
      orderNumber: Number;
      product: String;
      totalPrice: Number;
      status: String;
    };

    const body: TOrder = await req.json();
    const { orderNumber, userId, product, totalPrice, status } = body;
    if (orderNumber && userId && product && totalPrice && status) {
      const order = await OrderModel.create(body);
      return NextResponse.json(
        { order, message: "Your order has been created" },
        { status: HttpStatusCode.Created }
      );
    }

    return NextResponse.json(
      { message: "Order name is missing" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (err) {
    console.log(err);
    return { err };
  }
}
