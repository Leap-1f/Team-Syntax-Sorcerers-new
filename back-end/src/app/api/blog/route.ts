import { HttpStatusCode } from "axios";

import BlogModel from "../../../models/blog.model";
import { NextRequest, NextResponse } from "next/server";

type CreatePostDto = {
  title: string;
  image: string;
  description: string;
};

async function POST(req: NextRequest) {
  try {
    const body: CreatePostDto = await req.json();
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
export { POST };
async function GET(_: NextRequest) {
  try {
    const post = await BlogModel.find();
    if (post) {
      return NextResponse.json(post);
    }
    return NextResponse.json(
      { message: `Post not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred while fetching posts" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
export { GET };
