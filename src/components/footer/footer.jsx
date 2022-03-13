import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import logo from "../../assets/Logo.png"


const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><img src ={logo} alt="Logo" rel='noopener noreferrer'></img></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://linkedin.com" target="_blank" rel='noopener noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/jbohol11" target="_blank" rel='noopener noreferrer'><BsGithub /></a>
        <a href="https://facebook.com/jrbohol11"><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jbohol.com All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
