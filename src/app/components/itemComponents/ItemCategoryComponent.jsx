import React from 'react';
import Link from 'next/link';

const ItemCategoryComponent = ({data}) => {
  return (
    <div className="flex flex-wrap flex-row justify-center md:justify-start align-middle m-2">
      {data?.map((i) => (
        <div key={i.id} className="border-2 border-zinc-900 m-2 p-2 w-56">
          <Link href={`/squares/${i.id}`}>
            <p>name: {i.name}</p>
            <div className="w-56 h-64"></div>
            <p>description: {i.category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemCategoryComponent;
