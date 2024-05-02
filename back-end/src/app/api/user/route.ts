import { HttpStatusCode } from "axios";
import UserModel from "../../../models/user.model";
import { NextRequest, NextResponse } from "next/server";
type CreateProductDto = {
  name: String;
  password: String;
  firstName: String;
  lastName: String;
  phoneNumber: Number;
  role: String;
  orders: String[];
};
export async function POST(req: NextRequest) {
  try {
    console.log("user deer huselt irlee");
    const body: CreateProductDto = await req.json();
    if (body) {
      const user = await UserModel.create(body);
      return NextResponse.json(
        { user, message: "Your user has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "User name is missing" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export async function GET(_: NextRequest) {
  try {
    const product = await UserModel.find();
    // "6630a6a39ab1cf1e3e87aae9"
    // ).populate({
    //   path: "orderId",
    //   model: "order",
    // });
    if (product) {
      return NextResponse.json({ product });
    }
    return NextResponse.json(
      { message: `Product not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
