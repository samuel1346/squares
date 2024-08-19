import data from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    if (!data) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
