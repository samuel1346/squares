import React from 'react'
import NavigationComponent from '../components/navigationComponents/NavigationComponent'
const layout = ({children}) => {
  return (
    <>
    <NavigationComponent/>
        {children}
    </>
  )
}

export default layout