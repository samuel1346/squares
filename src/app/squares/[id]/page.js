'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import data from '@/app/data/data';
import ItemDetailsComponent from '@/app/components/itemComponents/ItemDetailsComponent';

const Page = ({params}) => {
  return (
    <div>
      <ItemDetailsComponent params={params} />
    </div>
  );
};

export default Page;

