import connectMongo from "../utils/database";
import Product from "../models/product";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  type CreateProductDto = {
    name: string;
    description: string;
    price: number;
  };
  try {
    await connectMongo();
    const body: CreateProductDto = await req.json();
    if (body.name) {
      const product = await Product.create(body);
      return NextResponse.json(
        { product, message: "Your product has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "Product name is missing" },
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
