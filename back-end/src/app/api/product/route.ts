import { HttpStatusCode } from "axios";

import ProductModel from "../../../models/product.model";
import { NextRequest, NextResponse } from "next/server";

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
    console.log("product deer huselt irlee");
    const body: CreateProductDto = await req.json();

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
    console.log(error);
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const paramLimit = req.nextUrl.searchParams.get("limit");
    let product;

    if (paramLimit) {
      product = await ProductModel.find().limit(parseInt(paramLimit));
    } else {
      product = await ProductModel.find();
    }

    console.log(product);

    if (product.length > 0) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json(
        { message: `Products not found` },
        { status: HttpStatusCode.NotFound }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error occurred while fetching products" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}

// export async function GET(_: NextRequest) {
//   try {
//     const product = await ProductModel.find();
//     if (product) {
//       return NextResponse.json({ product });
//     }
//     return NextResponse.json(
//       { message: `Product not found` },
//       { status: HttpStatusCode.NotFound }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: error },
//       { status: HttpStatusCode.BadRequest }
//     );
//   }
// }
