import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import DeleteComponent from './DeleteComponent';
import EditComponent from './EditComponent';
const ProductsComponent = async() => {
    const myApi = process.env.NODE_ENV === 'development'? 'http://localhost:3000': 'https://squares-blue.vercel.app';
    
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/API/products`,{
        next: { revalidate: 0 }
        }).then(r=>r.json()).catch(e=>{
        console.error('HTTP error!! status: 404', e)
        return []
        }
        );
    const Data = data

  return (
    <div className='my-2 '>
        <div className='*:text-zinc-200 m-2 my-4 flex flex-row justify-between'>
            <p className='border-b-2 border-zinc-200/50 p-1'>
                List of products
            </p>
            <Link href={'/admin'} className='border-b-2 border-zinc-200/50 p-1'>
                Back to menu
            </Link>
        </div>
    {
        Data?.map(i=>(
        <div className='flex flex-col'  key={i.index}>
            <div
            className='border-2 border-zinc-200/75 bg-zinc-900/50 justify-between flex md:flex-row flex-col mx-2'>
                <div className=' flex flex-col md:flex-row *:m-2  *:text-zinc-200 '>
                    <div className='md:w-1/6'>
                        name : {i.name}
                    </div>
                    <div className="md:w-1/6">
                        <Image
                        src={i.img}
                        alt={i.name}
                        width={300}
                        height={200}
                        className="bg-contain w-10 h-10"
                        />
                    </div>
                    <div className='md:w-1/4'>
                        description : {i.description}
                    </div>
                    <div className='md:w-1/6'>
                        category : {i.category}
                    </div>
                </div>
                <DeleteComponent  id={i.id}/>
            </div>
            <EditComponent  id={i.id}/>
        </div>
        ))
    }
    </div>
  )
}

export default ProductsComponent