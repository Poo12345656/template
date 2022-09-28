import React from 'react'
import classNames from 'classnames';
import "./Button.css"

function Button({test,
    color = "red",
    size,
    variant,
    text,
    textDecoration,
    as: Component ="button",
    children,
    ...rest}) {
        const buttonClasses = classNames("buttonWrapper",{
            [color]: !!color,
            [size]: !!size,
            [variant]: !!variant
    
        });
        return (
            <Component className={buttonClasses}{...rest}>
                  {test}
            </Component>
        
            
          )
}

export default Button