import React from 'react'
import Text from '../Text/Text'
import "./Service.css"
 import Button from '../Button/Button'


function Service({heading,description,showButton=false ,buttonText}) {
  return (
    <div className='serviceContain'>
    <Text className="serviceHeading"  as="h4">{heading} </Text>
    <Text  className="serviceDescription" as="p">{description} </Text>
    <div className='serviceButton'>
    {
      showButton?<Button
      variant="primary"
      test={buttonText}
      />:null
    }
    </div>
    
</div>
  )
}

export default Service