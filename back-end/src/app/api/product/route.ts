import { HttpStatusCode } from "axios";

import ProductModel from "../../../models/product.model";
import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body) {
      const product = await ProductModel.create(body);
      return NextResponse.json(
        { product, message: "Your product has been created" },
        { status: HttpStatusCode.Created }
      );
    } else {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: HttpStatusCode.BadRequest }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
async function GET(_: NextRequest) {
  try {
    const product = await ProductModel.find();
    if (product) {
      return NextResponse.json(product);
    }
    return NextResponse.json(
      { message: `Product not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while fetching products" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
export { GET, POST };
