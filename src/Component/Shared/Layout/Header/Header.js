import React from 'react'

import Text from '../../Text/Text'
import Button from '../../Button/Button'
import "./Header.css"



function Header() {
  return (
    <div>
      
      <div className='topHeader'>
        <Text
          test="BAGGAGE"
          className="logo"
         
        />
        <div className='userBtnWrapper'>
          <div className='singIpWrapper'>

          <Button
          test = "Sing In"
          variant="link"
          />
          </div>
          <div className='singUpWrapper'>
          <Button
          test = "Sing Up"
          variant="link"
          />
          </div>
        </div>
      

      </div>
    </div>
 
  
  )
}

export default Header