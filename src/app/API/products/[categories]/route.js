
import { NextResponse } from "next/server";
import {collection, getDocs,doc, query} from "firebase/firestore"
import db from "../../../../../firebaseConfig";

export async function GET(req, { params }) {
  const { categories } = params; 
  const squareCollection = collection(db, 'productos');
  const getSquares = await getDocs(squareCollection)
  const squareArray = getSquares.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
  const Data = squareArray
console.log(Data)
  try {
    const filteredData = Data.filter(item => item.category === categories);

    if (filteredData.length === 0) {
      return NextResponse.json({ message: "No products found for this category" }, { status: 404 });
    }

    return NextResponse.json(filteredData, { status: 200 });
  } catch (error) {
    console.error("Error fetching category data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
