import { NextRequest, NextResponse } from "next/server";
import LocationModel from "../../../models/location.model";
import { HttpStatusCode } from "axios";
type TLocation = {
  district: String;
  khoroo: String;
  apartment: String;
  orderNote: String;
};
async function POST(req: NextRequest) {
  try {
    const body: TLocation = await req.json();
    const user = await LocationModel.create(body);
    return NextResponse.json(
      { user, message: "Your user has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (err) {
    return { err };
  }
}
async function GET(req: NextRequest) {
  try {
    const location = await LocationModel.find();
    if (location) {
      return NextResponse.json(location);
    }
    return NextResponse.json(
      { message: `Location not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export { GET };
