import { NextRequest, NextResponse } from "next/server";
import LocationModel from "../../../models/location.model";
import { HttpStatusCode } from "axios";
import { error } from "console";

// Define the type for the request body
interface LocationRequestBody {
  // Add the properties of your LocationModel here, e.g.,
  name: string;
  address: string;
  // Add other fields as needed
}

async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: LocationRequestBody = await req.json();
    const location = await LocationModel.create(body);
    return NextResponse.json(
      { location, message: "Таны захиалга амжилттай боллоо" },
      { status: HttpStatusCode.Created }
    );
  } catch (err) {
    return NextResponse.json(
      { message: error || "Internal Server Error" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}

async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const locations = await LocationModel.find();
    if (locations.length > 0) {
      return NextResponse.json(locations);
    } else {
      return NextResponse.json(
        { message: "Location not found" },
        { status: HttpStatusCode.NotFound }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error || "Bad Request" },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export { GET, POST };
