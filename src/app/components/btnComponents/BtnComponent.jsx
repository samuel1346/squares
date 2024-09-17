'use client'
import React, { useEffect, useState, useRef } from 'react'
import btnFunction from './btnFunction'



const BtnComponent = ({btnName, btnIcon, btnState, btnSetState}) => {
  
  const btnRef = useRef(null);


  const handleDispatch = ()=>{
    btnFunction(btnState, btnSetState)
    console.log(btnState)
  }

  return (
    <>
    <button 
    onClick={handleDispatch}
    ref={btnRef}
    id='btn' 
    >
      {btnIcon}
    </button>
    </>
  )
}

export default BtnComponent