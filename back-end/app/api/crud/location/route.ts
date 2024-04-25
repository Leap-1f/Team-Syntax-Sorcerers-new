import { NextRequest, NextResponse } from "next/server";
import LocationModel from "../../models/location.model";
import { HttpStatusCode } from "axios";
export async function POST(req: NextRequest) {
  try {
    type TLocation = {
      district: String;
      commitee: String;
      apartment: String;
    };
    const body: TLocation = await req.json();
    if (body.district && body.commitee && body.apartment) {
      const user = await LocationModel.create(body);
      return NextResponse.json(
        { user, message: "Your user has been created" },
        { status: HttpStatusCode.Created }
      );
    }

    return NextResponse.json(
      { message: "User name is missing" },
      { status: HttpStatusCode.BadRequest }
    );
  } catch (err) {
    console.log(err);
    return { err };
  }
}
