import { HttpStatusCode } from "axios";

import ProductModel from "../../../models/product.model";
import { NextRequest, NextResponse } from "next/server";
import OrderModel from "@/src/models/order.model";
import UserModel from "@/src/models/user.model";

type CreateProductDto = {
  name: string;
  image: string;
  color: string;
  brand: string;
  category: string;
  price: number;
  discount: string;
  rest: number;
  size: number;
  status: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: CreateProductDto = await req.json();
    if (body) {
      const product = await ProductModel.create(body);
      return NextResponse.json(
        { product, message: "Your product has been created" },
        { status: HttpStatusCode.Created }
      );
    }
  } catch (error) {
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
      return NextResponse.json(product);
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
