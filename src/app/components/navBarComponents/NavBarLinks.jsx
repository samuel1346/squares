'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import BtnComponent from '../btnComponents/BtnComponent'
import { dropDownFunction} from '../btnComponents/dropDownFunction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


const NavBarLinks = () => {
  const buttonState = useSelector(state=> state.btn.buttonState);
  const buttonName = useSelector(state=> state.btn.buttonName);
  const navIcon = <FontAwesomeIcon icon={faBars}/>
  const cart = <FontAwesomeIcon icon={faCartShopping}/>
  return (
    <div className='flex flex-row bg-zinc-200 w-full min-h-10 absolute opacity-100 top-0'>
      <FontAwesomeIcon icon={faSquare} className='m-1  absolute'/>
      <FontAwesomeIcon icon={faSquare} className='m-2  absolute'/>
      <FontAwesomeIcon icon={faSquare} className='m-3  absolute'/>
      <div className={`${dropDownFunction(buttonName, buttonState,
      'opacity-0 -z-50 absolute',
      'opacity-100 z-auto flex flex-col mt-7 ms-20 my-2 *:m-4 bg-zinc-200'
      )}
      `}>
        <Link href="/squares">
          squares
        </Link>
        <Link href="/about">
          about
        </Link>
        <Link href="/mySquareCart">
          {cart}
        </Link>
      </div>
      <div className='absolute right-2 top-2'>
        <BtnComponent btnName={'btnBurger'} btnIcon = {navIcon}/>
      </div>
    </div>
  )
}

export default NavBarLinks