
import { NextResponse } from "next/server";
import {collection, getDocs,doc, query} from "firebase/firestore"
import db from "../../../../firebaseConfig";

export async function GET() {
  const squareCollection = collection(db, 'productos');
  const getSquares = await getDocs(squareCollection)
  const squareArray = getSquares.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  
  try {
    if (!squareArray) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }
    return NextResponse.json(squareArray, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
