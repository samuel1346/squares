import React from 'react'
import ItemCategoryComponent from '@/app/components/itemComponents/ItemCategoryComponent'

const page = ({params}) => {
  return (
    <>
         <ItemCategoryComponent params={params}/>
    </>
  )
}

export default page