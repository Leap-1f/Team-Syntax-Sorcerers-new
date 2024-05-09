import { HttpStatusCode } from "axios";
import UserModel from "../../../models/user.model";

import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  try {
    const body = await req.json();
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
async function GET(_: NextRequest) {
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
export { GET, POST };
//  async function DELETE(req: NextRequest) {
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
