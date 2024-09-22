import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

const ItemsComponents = async () => {
  const square = <FontAwesomeIcon icon={faSquare} className='h-4 w-4 pt-1'/>
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/API/products`,{
    cache : 'no-store'
  }).then(r=>r.json()).catch(e=>console.error('HTTP error! status: 404', e)
  );
  console.log('api',process.env.NEXT_PUBLIC_API_URL, 'production', process.env.NODE_ENV)
  return (
    <div className="flex flex-wrap flex-row justify-center md:justify-start align-middle m-2">
      {data?.map((i) => (
        <div 
        key={i.id}
        className="relative max-w-xs mx-auto bg-blue-800 border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden my-4"
        >
        <Link href={`/squares/${i.id}`}>
          <div className="absolute inset-0 bg-cover bg-center card-backgrond" style={{ backgroundImage: "url('/textures/textureTwo.jpg')" }}></div>
          <div className="relative text-center text-white font-bold text-xl mt-2">
          {i.name}
          </div>
          <div className="relative  border border-black rounded-md overflow-hidden mx-2 mt-2
          ">
            <Image
              src={i.img}
              alt={i.name}
              width={300}
              height={200}
              className="md:p-10 hover:md:p-0 transition-all bg-zinc-900/50"
              />
          </div>
          <div className="relative mt-2 mx-2 text-white  bg-zinc-600 opacity-75">
            <p className="mt-2 text-sm border-2 border-zinc-900 p-2">
              {i.description}
            </p>
          </div>
          <div className="relative text-center text-white text-sm mt-2 mb-2 border-2 border-zinc-200/25 m-2 bg-zinc-900/75 rounded-md">
          {i.category}
          </div>
          <div className="relative text-center w-10  text-white text-sm my-2 border-2 border-zinc-200/25 m-2 bg-zinc-900/75 rounded-md ">
            {i.price} {square}
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemsComponents;
