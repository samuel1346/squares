import React from 'react';
import data from '@/app/data/data';
import Link from 'next/link';

const NavigationComponent = () => {
  return (
    <div>
      <ul className='flex flex-row flex-wrap'>
        {data?.map((i) => (
          <li key={i.id} className='rounded-lg border-2 border-zinc-600 m-2 p-2'>
            <Link href={`/categories/${i.category}`}>
              {i.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationComponent;

