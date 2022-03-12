import React from 'react'
import "./header"
import CTA from './CTA'
import ME from '../../assets/Header.png'
import HeaderSocials from './HeaderSocials'
import './header.css'


const header = () => {
  return (
    <header>
      <div id="home" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jhun Bohol</h1>
        <h5 className='text-light'>a Freelance Web Developer </h5>
        
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>
        
        <div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default header