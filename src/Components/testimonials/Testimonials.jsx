import React from 'react'
import './testimonials.css'
import { testimonialData } from '../../data';
import { SwiperSlide, Swiper } from 'swiper/react';
import Slider from '../../tools/Slider/Slider'
export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5> Client Testimonials </h5>
      <h2> Reviews </h2>

      <Swiper 
       spaceBetween={40}
       pagination={{ clickable: true }}
      className="container testimonials__container">
        {testimonialData.map((item) => (
          <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={item.avatar} alt="" />
          </div>
            <h5 className="client__name">
              {item.name}
            </h5>
            <small className="client__review">
            {item.text}
            </small>
        </SwiperSlide>

          ))}
      </Swiper>
    </section>
  )
}
