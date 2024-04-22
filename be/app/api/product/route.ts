import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const greeting = "irle";
    const json = {
      greeting,
    };
    return NextResponse.json(json);
  } catch (err) {
    return "failed to fetch data";
  }
}
