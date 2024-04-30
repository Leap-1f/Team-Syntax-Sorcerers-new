import { HttpStatusCode } from "axios";

import ProductModel from "../../../models/product.model";
import { NextRequest, NextResponse } from "next/server";

type CreateProductDto = {
  name: string;
  image: string;
  color: string;
  brand: string;
  gender: string;
  price: number;
  discount: string;
  rest: number;
  size: number;
};

export async function POST(req: NextRequest) {
  try {
    console.log("product deer huselt irlee");
    const body: CreateProductDto = await req.json();
    const { name, image, color, brand, gender, price, discount, rest, size } =
      body;

    if (
      name &&
      image &&
      price &&
      color &&
      brand &&
      gender &&
      discount &&
      rest &&
      size
    ) {
      const product = await ProductModel.create(body);
      return NextResponse.json(
        { product, message: "Your product has been created" },
        { status: HttpStatusCode.Created }
      );
    }
    return NextResponse.json(
      { message: "FUCKING ERROR" },
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
