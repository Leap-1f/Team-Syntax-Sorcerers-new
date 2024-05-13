import { HttpStatusCode } from "axios";
import ProductModel from "../../../models/product.model";
import { NextRequest, NextResponse } from "next/server";

interface Product {
  _id: string;
  name: string;
  image: string;
  color: string;
  brand: string;
  category: string;
  price: number;
  discount: string;
  rest: number;
  status: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

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
async function GET(req: NextRequest) {
  try {
    const paramLimit = req.nextUrl.searchParams.get("limit");
    const limit: any = paramLimit ? parseInt(paramLimit) : undefined;

    const products: Product[] = await ProductModel.find().limit(limit);

    if (products.length === 0) {
      return NextResponse.json(
        { message: `Products not found` },
        { status: HttpStatusCode.NotFound }
      );
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error occurred while fetching products:", error);
    return NextResponse.json(
      { message: "Error occurred while fetching products" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}

export { GET, POST };
