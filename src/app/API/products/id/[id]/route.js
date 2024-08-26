import { NextResponse } from "next/server";
import {collection, getDocs,doc, query} from "firebase/firestore"
import db from "../../../../../../firebaseConfig";

export async function GET(req, { params }) {
  const { id } = params; 
  const squareCollection = collection(db, 'productos');
  const getSquares = await getDocs(squareCollection)
  const squareArray = getSquares.docs.map((doc) => ({ ...doc.data() }))
  const Data = squareArray[0].data
  const filteredData = Data.find(item => String(item.id) === String(id));
  console.log(Data)
  try {
    if (!filteredData) {
      return NextResponse.json({ message: "No product found" }, { status: 404 });
    }

    return NextResponse.json(filteredData, { status: 200 });
  } catch (error) {
    console.error("Error fetching product data:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
