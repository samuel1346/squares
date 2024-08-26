import React from 'react'
import Image from 'next/image'

const ItemDetailsComponent = async({params}) => {
  const {id} = params;

  const data = await fetch(`http://localhost:3000/API/products/id/${id}`, {
    cache: 'no-store',
  }).then(r=>r.json()).catch(e=>console.log('error',e))
  return (
    <div className="relative max-w-xs mx-auto bg-blue-800 border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/textures/textureTwo.jpg')" }}></div>
      <div className="relative text-center text-white font-bold text-xl mt-2">
      {data.name}
      </div>
      <div className="relative bg-white border border-black rounded-md overflow-hidden mx-2 mt-2">
        <Image
          src={data.img}
          alt="Square Trujiyo"
          width={300}
          height={200}
          className="w-full"
        />
      </div>
      <div className="relative mt-2 mx-2 text-white  bg-zinc-600 opacity-75">
        <p className="mt-2 text-sm border-2 border-zinc-900 p-2">
          {data.description}
        </p>
      </div>
      <div className="relative text-center text-white text-sm mt-2 mb-2">
      {data.category}
      </div>
    </div>
  )
}

export default ItemDetailsComponent