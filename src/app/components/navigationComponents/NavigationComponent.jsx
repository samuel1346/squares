import React from 'react';
import Link from 'next/link';
export const dynamic = "force-dynamic";

const NavigationComponent = async () => {
    const uniqueCategories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/API/products/categories`, {
      next: { revalidate: 0 }
    }).then(r=>r.json()).catch(e=>console.log(e,'error'))


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
