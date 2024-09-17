'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

const CarComponent = () => {
  const car = useSelector(state => state.car.car);
  console.log(car);

  return (
    <div className='flex flex-col items-center'>
      <div className="flex flex-wrap flex-row justify-center md:justify-start align-middle m-2">
        {car?.map((item, index) => (
          <div 
            key={item.data.id} 
            className="relative max-w-xs mx-2 bg-blue-800 border-2 border-blue-900 rounded-lg shadow-lg overflow-hidden my-4"
          >
            <Link href={`/squares/${item.data.id}`}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/textures/textureTwo.jpg')" }}></div>
              <div className="relative text-center text-white font-bold text-xl mt-2">
                {item.data.name}  
              </div>
              <div className="relative bg-white border border-black rounded-md overflow-hidden mx-2 mt-2">
                <Image
                  src={item.data.img} 
                  alt={item.data.name}
                  width={300}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="relative mt-2 mx-2 text-white bg-zinc-600 opacity-75">
                <p className="mt-2 text-sm border-2 border-zinc-900 p-2">
                  {item.data.description} 
                </p>
              </div>
              <div className="relative text-center text-white text-sm mt-2 mb-2">
                {item.data.category} 
              </div>
              <div className="relative text-center text-white text-sm mt-2 mb-2">
                Cantidad: {item.quantity} 
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link href={'/mySquareCart/buyCar'} 
      className='
      cursor-pointer border-2 border-zinc-200/50 rounded-md bg-zinc-900/75 text-zinc-200 font-semibold
      m-2 p-2 w-fit
      '>
        Buy car
      </Link>
    </div>
  );
}

export default CarComponent;
