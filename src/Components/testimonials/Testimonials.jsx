import React from 'react'
import './testimonials.css'
import AVT from '../../assets/avatar1.jpg'

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5> Client Testimonials </h5>
      <h1> Reviews </h1>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="" />
          </div>
            <h5 className="client__name">
              Daves Scott
            </h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae molestias 
              temporibus quos ducimus itaque voluptatum voluptas quo 
              necessitatibus nihil ab nulla ipsa doloribus commodi earum, 
              corporis impedit illum velit.
            </small>
        </article>
      </div>
    </section>
  )
}
