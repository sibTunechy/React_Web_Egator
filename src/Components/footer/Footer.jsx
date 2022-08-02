import React from 'react'
import { BsWhatsapp, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'
import './footer.css'
export default function () {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo' > ADLERS </a>

      <ul className="permalinks">
        <li><a href="#">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#testimonials">TESTIMONIALS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__social">
        <a href="http://linkedin.com"><BsLinkedin /></a>
        <a href="http://facebook.com"><BsFacebook /></a>
        <a href="http://twitter.com"><BsTwitter /></a>
        <a href="http://whatsapp.com"><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Adlers Adams. All right reserved </small>
      </div>
    </footer>
  )
}
