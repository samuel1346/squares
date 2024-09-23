import React from 'react'
import Image from 'next/image'
import AddToCarBtnComponent from '../btnComponents/AddToCarBtnComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

const ItemDetailsComponent = async({params}) => {
  const myApi = process.env.NODE_ENV === 'development'? 'http://localhost:3000': 'https://squares-blue.vercel.app';
  
  const {id} = params;
  const square = <FontAwesomeIcon icon={faSquare} className='h-4 w-4 pt-1'/>

  const data = await fetch(`${myApi}/API/products/id/${id}`, {
    cache: 'no-store',
  }).then(r=>r.json()).catch(e=>console.log('error',e))
  return (
  <>
    <div className="relative max-w-xs mx-auto bg-blue-800 border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/textures/textureTwo.jpg')" }}></div>
      <div className="relative text-center text-white font-bold text-xl mt-2">
      {data?.name}
      </div>
      <div className="relative bg-white border border-black rounded-md overflow-hidden mx-2 mt-2">
        <Image
          src={data?.img}
          alt="Square Trujiyo"
          width={300}
          height={200}
          className="w-full"
          />
      </div>
      <div className="relative mt-2 mx-2 text-white  bg-zinc-600 opacity-75">
        <p className="mt-2 text-sm border-2 border-zinc-900 p-2 rounded-md">
          {data?.description}
        </p>
      </div>
      <div className="relative text-center text-white text-sm mt-2 mb-2 border-2 border-zinc-200/25 m-2 bg-zinc-900/50 rounded-md ">
      {data?.category}
      </div>
      <div className="relative text-center w-10  text-white text-sm my-2 border-2 border-zinc-200/25 m-2 bg-zinc-900/75 rounded-md ">
        {data?.price} {square}
      </div>
      <AddToCarBtnComponent data={data}/>
    </div>
  </>
  )
}

export default ItemDetailsComponent