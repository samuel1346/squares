'use client'
import React from 'react'
import { useState } from 'react'
import BtnComponent from '../btnComponents/BtnComponent'
import {  faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import CarLengthComponent from '../carComponents/CarLengthComponent'


const NavBarLinks = () => {
  const [btnState, btnSetState] = useState(true);
  const navIcon = <FontAwesomeIcon icon={faBars}/>
  const cart = <FontAwesomeIcon icon={faCartShopping}/>
  return (
    <div className='flex flex-row bg-zinc-200/60 w-full min-h-10 absolute opacity-100 top-0'>
      <FontAwesomeIcon icon={faSquare} className='m-1  absolute h-5 w-5'/>
      <FontAwesomeIcon icon={faSquare} className='m-2  absolute h-5 w-5'/>
      <FontAwesomeIcon icon={faSquare} className='m-3  absolute h-5 w-5'/>
      <div className={`
        ${btnState?
          'opacity-0 -z-50 absolute':
          'opacity-100 z-auto flex flex-col mt-7 ms-20 my-2 *:m-4'}
      `}>
        <Link href="/squares">
          squares
        </Link>
        <Link href="/about">
          about
        </Link>
        <Link href="/mySquareCart">
          {cart}
          <CarLengthComponent/>
        </Link>
      </div>
      <div className='absolute right-2 top-2'>
        <BtnComponent btnName={'btnBurger'} btnIcon = {navIcon} btnState={btnState} btnSetState={btnSetState}/>
      </div>
    </div>
  )
}

export default NavBarLinks