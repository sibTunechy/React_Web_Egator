import React from 'react'
import './contact.css'
import Card from '../../tools/Card/Card'
// import Button from '../../tools/Button/Button'

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Card>
            <h4>E-Mail</h4>
            <h5>email@email.com</h5>
              <a href="http://google.com"></a>
          </Card>
        </div>
      </div>
    </section>
  )
}
