import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
       <div className='main-info'>
        <h1>Web development and website services</h1>
        <Typed className='typed-text'
                strings={[
                    'Dərəcə bir',
                    'Dərəcə iki',
                    'Dərəcə üç']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>

                <a href="../logo.png" className='downloadcv' download> Download Cv</a>
       </div>
    </div>
  )
}

export default Header