import React from 'react';
import data from '@/app/data/data';
import Link from 'next/link';

const NavigationComponent = () => {
  const uniqueCategories = Array.from(new Set(data.map(i => i.category)));

  return (
    <div>
      <ul className='flex flex-row flex-wrap'>
        {uniqueCategories.map((category, index) => (
          <li key={index} className='rounded-lg border-2 border-zinc-600 m-2 p-2'>
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
