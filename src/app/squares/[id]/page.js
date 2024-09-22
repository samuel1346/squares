import React from 'react';
import ItemDetailsComponent from '@/app/components/itemComponents/ItemDetailsComponent';

const Page = ({params}) => {
  return (
    <div>
      <ItemDetailsComponent params={params} />
    </div>
  );
};

export default Page;

