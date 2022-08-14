import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
import Button from '../../tools/Button/Button'
import { portfolioData } from '../../data'

export default function Portfolio() {
  return (
    <section id='portfolio'>
     <h5>My Recent Work</h5>
     <h2> Portfolio </h2>

     <div className="container portfolio__container">
      {portfolioData.map((item) => (
        <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={item.img} alt="" />
        </div>

        <h3>{item.text}</h3>
        <Button className='cta'>
          <a href="" className='btn' target='_blank' {...item.git}>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'{...item.netlify}>Live Demo</a>
        </Button>
      </article>
        ))}
     </div>
    </section>
  )
}

