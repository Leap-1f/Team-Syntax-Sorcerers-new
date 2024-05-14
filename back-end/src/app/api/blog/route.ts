import { HttpStatusCode } from "axios";

import BlogModel from "../../../models/blog.model";
import { NextRequest, NextResponse } from "next/server";

interface Post {
  title: string;
  image: string;
  description: string;
}

async function POST(req: NextRequest) {
  try {
    const body: Post = await req.json();
    if (body) {
      const post = await BlogModel.create(body);
      return NextResponse.json(
        { post, message: "Your post has been created" },
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

    const posts: Post[] = await BlogModel.find().limit(limit);

    if (posts.length === 0) {
      return NextResponse.json(
        { message: `Products not found` },
        { status: HttpStatusCode.NotFound }
      );
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error occurred while fetching products:", error);
    return NextResponse.json(
      { message: "Error occurred while fetching products" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}

export { GET, POST };
