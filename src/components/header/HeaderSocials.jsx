import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/jrbohol11" target="_blank" rel='noreferrer'><BsGithub /></a>
            <a href="https://facebook.com/jrbohol11" target="_blank" rel='noreferrer'><BsFacebook /></a>
        </div>
    )
  }

  export default HeaderSocials