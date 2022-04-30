import React from 'react';
import Option from './Option'
import Navigation from './Navigation';
import '../CSS/Icon.css'
function Icon() {
  return( 
      <div className='parentIcon'>
            <Option prId="Icon"/>
            <div className="containerIcon">
                <Navigation/>
            </div>
      </div>
  )
}

export default Icon;
