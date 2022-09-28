import React from 'react'
import Search from '../../Search'
import Menu from '../../Menu/Menu'
import "./HeaderMiddleSection.css"

function HeaderMiddleSection() {
  return (
    <div className='headerMiddleWrapper'><Menu/><Search /></div>
  )
}

export default HeaderMiddleSection