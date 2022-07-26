import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
import Button from '../../tools/Button/Button'

export default function Portfolio() {
  return (
    <section id='portfolio'>
     <h5>My Recent Work</h5>
     <h2> Portfolio </h2>

     <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG} alt="" />
        </div>

        <h3>This is a portfolio Item title</h3>
        <Button className='cta'>
          <a href="" className='btn' target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </Button>
      </article>
     </div>
    </section>
  )
}

