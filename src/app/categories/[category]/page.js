'use client'
import React from 'react'
import ItemCategoryComponent from '@/app/components/itemComponents/ItemCategoryComponent'
import data from '@/app/data/data'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams();
    const {category} = params;
    const filteredCategories = data.filter((i)=>i.category=== category)
    console.log(category, filteredCategories)
  return (
    <>
         <ItemCategoryComponent data={filteredCategories}/>
    </>
  )
}

export default page