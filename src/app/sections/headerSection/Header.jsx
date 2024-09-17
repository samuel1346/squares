import React from 'react'
import BtnComponent from '@/app/components/btnComponents/BtnComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faVolleyball } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Header = () => {
  const navIcon = <FontAwesomeIcon icon={faVolleyball}/>
  return (
    <>
    <h1 className='absolute z-auto text-zinc-200 inset-x-28 inset-y-24 md:inset-x-80 h-fit'>
      squares squares squares
    </h1>
    <div className='flex flex-row mt-12 mx-2 *:-z-50 bg-zinc-900/75 shadow-inner rounded-lg border-2 border-zinc-600'>
      <div className=' w-screen overflow-hidden h-48 flex flex-row *:animate-bounce'>
        <div className='md:w-7 md:h-7 w-5 h-4 border-2 border-zinc-200 m-4'>

        </div>
        <div className='md:w-7 md:h-7 w-5 h-4 border-2 border-zinc-200 m-4 mt-14 '>

        </div>
        <div className='md:w-7 md:h-7 w-5 h-4 border-2 border-zinc-200 m-4 mt-24'>

        </div>
      </div>

      <div className=' w-screen overflow-hidden h-48 flex flex-row *:animate-bounce'>
        <div className='md:w-7 md:h-7 w-5 h-4 border-2 border-zinc-200 m-4'>

        </div>
        <div className='md:w-7 md:h-7 w-5 h-4 border-2 border-zinc-200 m-4 mt-14 '>

        </div>
        <div className='md:w-7 md:h-7 w-5 h-4 border-2 border-zinc-200 m-4 mt-24'>

        </div>
      </div>
    </div>
    </>
    
  )
}

export default Header