import React from 'react'
import './header.css'

import Button from '../../tools/Button/Button'
export default function Header() {
  return (
    <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Adams Albarka</h1>
      <h5 className='text-light'> Fullstack Developer</h5>
     </div>
     <Button />
    </header>
  )
}
