'use client'
import React from 'react'
import PostComponent from './PostComponent'
import EditComponent from './EditComponent'
import DeleteComponent from './DeleteComponent'
import { logOut } from './Log/signComponent'
import Link from 'next/link'

const ProductsTableComponent = () => {
  return (
    <div className='text-zinc-200 font-semibold m-2'>
        <div >
            <div className='flex flex-row justify-between'>
                <p>
                    
                </p>
                <Link href={'/admin/products'} className='border-b-2 border-zinc-200/50 p-1'>
                    see list of products
                </Link>
            </div>
            <div>
                <div>
                    <h2 className='text-xl border-b-2 border-zinc-200/50 p-1'>
                        Add a product
                    </h2>
                    <PostComponent/>
                </div>
            </div>
            <div className='*:text-zinc-200 *:bg-zinc-900/80 cursor-pointer
            *:shadow-sm hover:*:shadow-zinc-200/80 m-2 p-2 *:px-2 flex flex-row justify-end *:rounded-md'>
                <button onClick={logOut}>
                    Log out
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductsTableComponent