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
    const body: CreateProductDto = await req.json();
    const user = await UserModel.create(body);
    return NextResponse.json(
      { user, message: "Your user has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export async function GET(_: NextRequest) {
  try {
    const user = await UserModel.find().populate("orders");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

// export async function DELETE(req: NextRequest) {
//   try {
//     const body = req.json();
//     const deleteUser = await OrderModel.deleteOne();
//     return NextResponse.json(deleteUser);
//   } catch (error) {
//     return NextResponse.json(
//       { message: error },
//       { status: HttpStatusCode.BadRequest }
//     );
//   }
// }
