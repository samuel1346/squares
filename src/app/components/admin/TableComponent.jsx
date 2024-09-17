'use client'
import React, {useState} from 'react'
import BtnComponent from '../btnComponents/BtnComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowTurnDown, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import ProductsComponent from './ProductsComponent'

const TableComponent = ({btnName, btnState, btnSetState}) => {
  const ArrowDonwn = <FontAwesomeIcon icon={faArrowTurnDown}/>
  const ArrowUp = <FontAwesomeIcon icon={faArrowTurnUp}/>
  return (
    <div>
      <BtnComponent btnName={btnName} btnIcon = {btnState?ArrowDonwn:ArrowUp}
        btnState={btnState} btnSetState={btnSetState}/>
    </div>
  )
}

export default TableComponent