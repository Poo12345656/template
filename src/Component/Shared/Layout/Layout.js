import React from 'react'
import Header from './Header/Header'
import Footer from "./Footer"
import HeaderMiddleSection from './HeaderMiddleSection/HeaderMiddleSection'
import "./Layout.css"

function Layout() {
  return (
    <div><div className='headerWrapper'><Header/><HeaderMiddleSection/> </div><Footer/></div>
  )
}

export default Layout