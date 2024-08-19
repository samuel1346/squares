import data from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const uniqueCategories = Array.from(new Set(data.map(i => i.category)));

    return NextResponse.json(uniqueCategories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
