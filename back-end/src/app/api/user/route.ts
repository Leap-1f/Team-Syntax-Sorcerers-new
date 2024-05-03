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

    const user = await UserModel.create(body);
    return NextResponse.json(
      { user, message: "Your user has been created" },
      { status: HttpStatusCode.Created }
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
  console.log("ajillaa");
  try {
    const user = await UserModel.find().populate("orders");
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
