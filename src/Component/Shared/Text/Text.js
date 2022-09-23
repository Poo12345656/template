import classNames from 'classnames';
import React from 'react'


function Text({test,color= "black", as: Tag = "p",size="xl",children,...rest}) {
    
        const testClasses = classNames("testWrapper", {
          [color]: !!color,
          [size]: !!size
        });
        return (
          <Tag className={testClasses} {...rest}>
            {test || children}
          </Tag>
        );
      }

export default Text