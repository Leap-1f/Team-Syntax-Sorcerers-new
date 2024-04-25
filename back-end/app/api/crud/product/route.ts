import { HttpStatusCode } from "axios";
import connectMongo from "../../database/database";
import ProductModel from "../../models/product.model";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    type CreateProductDto = {
      name: string;
      description: string;
      price: number;
    };
    const body: CreateProductDto = await req.json();
    if (body.name) {
      const product = await ProductModel.create(body);
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
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
export async function GET(_: NextRequest) {
  try {
    await connectMongo();
    const product = await ProductModel.find();
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
