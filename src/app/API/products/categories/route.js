
import { NextResponse } from "next/server";
import {collection, getDocs,doc, query} from "firebase/firestore"
import db from "../../../../../firebaseConfig";

export async function GET() {
  const squareCollection = collection(db, 'productos');
  const getSquares = await getDocs(squareCollection)
  const squareArray = getSquares.docs.map((doc) => ({ ...doc.data() }))
  const Data = squareArray
  try {
    const uniqueCategories = Array.from(new Set(Data.map(i => i.category)));

    return NextResponse.json(uniqueCategories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
