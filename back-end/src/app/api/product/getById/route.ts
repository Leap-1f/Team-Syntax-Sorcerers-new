import { HttpStatusCode } from "axios";
import ProductModel from "../../../../models/product.model";
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

async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (id) {
      const products: Product[] = await ProductModel.find({ _id: id });
      console.log(products);
      if (products.length === 0) {
        return NextResponse.json(
          { message: `Products not found` },
          { status: HttpStatusCode.NotFound }
        );
      }
      return NextResponse.json(products);
    }
  } catch (error) {
    console.error("Error occurred while fetching products:", error);
    return NextResponse.json(
      { message: "Error occurred while fetching products" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}

export { GET };
