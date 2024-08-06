'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import data from '@/app/data/data';
import ItemDetailsComponent from '@/app/components/itemComponents/ItemDetailsComponent';

const Page = () => {
  const params = useParams();
  const {id } = params;
  const item = data.find(item => item.id === id);
  console.log(id, item);

  return (
    <div>
      <ItemDetailsComponent id={id} data={data } />
    </div>
  );
};

export default Page;

