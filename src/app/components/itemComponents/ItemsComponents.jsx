import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ItemsComponents = async () => {
  const data = await fetch(`http://localhost:3000/API/products`,{
    cache: 'no-store'
  }).then(r=>r.json()).catch(e=>console.error('HTTP error! status: 404', e)
  );
  const Data = data[0].data
  return (
    <div className="flex flex-wrap flex-row justify-center md:justify-start align-middle m-2">
      {Data?.map((i) => (
        <div 
        key={i.id}
        className="relative max-w-xs mx-auto bg-blue-800 border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden my-4"
        >
        <Link href={`/squares/${i.id}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/textures/textureTwo.jpg')" }}></div>
          <div className="relative text-center text-white font-bold text-xl mt-2">
          {i.name}
          </div>
          <div className="relative bg-white border border-black rounded-md overflow-hidden mx-2 mt-2">
            <Image
              src={i.img}
              alt={i.name}
              width={300}
              height={200}
              className="w-full"
              />
          </div>
          <div className="relative mt-2 mx-2 text-white  bg-zinc-600 opacity-75">
            <p className="mt-2 text-sm border-2 border-zinc-900 p-2">
              {i.description}
            </p>
          </div>
          <div className="relative text-center text-white text-sm mt-2 mb-2">
          {i.category}
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemsComponents;
