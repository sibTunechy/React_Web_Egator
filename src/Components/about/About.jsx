import React from 'react'
import './about.css'
import { data, cardData } from '../../data'
import Button from '../../tools/Button/Button'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'

export default function About() {
  return (
    <section className='about' id='about'>
      <h5>Get to know Herr Adams</h5>
      <h2>I write and speak 5 Languages</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ data.imag2 } alt="" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">
          {cardData.map((item) => (
          <article className="about__card">
            <span className='about__icon'>{item.icon}</span>
            <h5>{item.title}</h5>
            <small>{item.year}</small>
          </article>
          ))}

        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Aperiam, deleniti in quasi incidunt assumenda ea eum? Numquam error amet accusamus, 
          voluptate laudantium, nulla, saepe excepturi aliquid ipsum illum ipsam magni.
        </p>
        
        <Button>
          <a href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>
        </Button>

      </div>

      </div>
    </section>
  )
}
