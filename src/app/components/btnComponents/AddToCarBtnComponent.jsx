'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setCar } from '../../../../store/cartSlice/carSlice'

const AddToCarBtnComponent = ({data}) => {
    const car = useSelector(state => state.car.car);
    const [num, setNum] = useState(1);
    const dispatch = useDispatch()
    console.log(car)

    const handleAdd = ()=>{
        num<3?setNum(num+1):num
    }
    const handleRest = ()=>{
        num>1?setNum(num-1):num
    }
    const handleDispatch = ()=>{
        dispatch(setCar({ data, quantity: num }))
        alert('added to car')
    }
  return (
    <div className='flex flex-row m-2 p-2 justify-center *:px-2 
        mt-2 mx-2 text-white  bg-zinc-600 opacity-75'>
        <button onClick={handleRest}>
            -
        </button>
        <div>
            {num}
        </div>
        <button onClick={handleAdd}>
            +
        </button>
        <button onClick={handleDispatch}>
            add to car
        </button>
    </div>
  )
}

export default AddToCarBtnComponent