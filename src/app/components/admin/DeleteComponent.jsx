'use client'
import React from 'react'
import {doc, deleteDoc} from 'firebase/firestore'
import db from '../../../../firebaseConfig'

const DeleteComponent = ({id}) => {

  const deleteProduct = () =>{
    try{
      const product = doc(db,'productos', id)
      deleteDoc(product)
      alert('DELETED')
    }catch(error){
      console.log(error, 'error message')
      console.log(id)
    }
  }

  return (
    <button className="text-zinc-300/50 m-2 text-lg shadow-inner hover:text-zinc-200"  onClick={deleteProduct}>
      Delete
    </button>
  )
}

export default DeleteComponent