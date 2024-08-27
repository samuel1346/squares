'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const CarLengthComponent = () => {
  const carLength = useSelector(state => state.car.car)
  return (
    <>
        {carLength.length}
    </>
  )
}

export default CarLengthComponent