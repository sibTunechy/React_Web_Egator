import React, { Children } from 'react'
import './button.css'
import CV from '../../assets/cv.pdf'

const Button = (props) => {
  return (
    <button className='cta'>
     <a href={CV} download className='btn'> Download CV </a>
    <a href='#contact' className='btn btn-primary'> Let's Talk </a>
    </button>
  )
}

export default Button
