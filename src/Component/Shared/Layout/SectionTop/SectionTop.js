import React from 'react'
import Button from '../../Button/Button'
import Text from '../../Text/Text'
import Img from '../../Img/Img'
import "./SectionTop.css"
function SectionTop() {
  return (
    <div className='sectionTop'>
        <div className='sectionTopHeading'>
        <Text
            test= "THE LARGEST RANGE OF HANDBAGS"
            as='p'
            className="bannerHeading"
            />
            <Button
            variant="primary"
            test="shop now"
            />
        </div>
       
            
        <div className='bannerImg'>
         <Img
         src="https://demo.w3layouts.com/demos_new/template_demo/29-05-2019/baggage_demo_Free/379113341/web/images/bag.png"/>
        </div>
    </div>
  )
}

export default SectionTop