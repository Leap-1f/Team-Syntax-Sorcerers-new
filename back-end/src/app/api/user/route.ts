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
  orderId: String[];
};
export async function POST(req: NextRequest) {
  try {
    console.log("user deer huselt irlee");
    const body: CreateProductDto = await req.json();
    const { name, password, firstName, lastName, phoneNumber, role, orderId } =
      body;
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
    if (product) {
      return NextResponse.json({ product });
    }
    return NextResponse.json(
      { message: `Product not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}