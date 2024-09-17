import React from 'react';
import Link from 'next/link';

const NavigationComponent = async () => {
    const uniqueCategories = await fetch("http://localhost:3000/API/products/categories", {
      cache: 'no-store',
    }).then(r=>r.json())


    return (
      <div>
        <ul className='flex flex-row flex-wrap'>
          {uniqueCategories.map((category, index) => (
            <li key={index} className='rounded-lg border-2 border-zinc-600 bg-zinc-900/75 m-2 p-2  text-zinc-200'>
              <Link href={`/categories/${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  
};

export default NavigationComponent;
