// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react'

export default function Slider(props) {
  return (
    <Swiper
    // install Swiper modules
    modules={[ Pagination ]}
    spaceBetween={40}
    slidesPerView={3}
    pagination={{ clickable: true }}
 
  >
    {props.children}
    </Swiper>
  )
}
