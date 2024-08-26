'use client'
import React, { useEffect, useState, useRef } from 'react'
import btnFunction from './btnFunction'
import { useDispatch, useSelector } from 'react-redux';
import {setBtn} from '../../../../store/btnSlice/btnSlice';
import dropDownFunction from './dropDownFunction';



const BtnComponent = ({btnName, btnIcon}) => {
  const dispatch = useDispatch();
  const buttonName = useSelector(state=> state.btn.buttonName);
  const buttonState = useSelector(state=> state.btn.buttonState);
  const [state, setState] = useState(true);
  const btnRef = useRef(null);


  const handleDispatch = ()=>{
    btnFunction(state, setState, btnName)
    dispatch(setBtn({ buttonName: btnName, buttonState: state }))
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