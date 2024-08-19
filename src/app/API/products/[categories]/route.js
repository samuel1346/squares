import data from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { categories } = params; 

  try {
    const filteredData = data.filter(item => item.category === categories);

    if (filteredData.length === 0) {
      return NextResponse.json({ message: "No products found for this category" }, { status: 404 });
    }

    return NextResponse.json(filteredData, { status: 200 });
  } catch (error) {
    console.error("Error fetching category data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
