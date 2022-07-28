// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from 'react'

export default function Slider(props) {
  return (
    <Swiper
      modules={[ Pagination ]}
      slidesPerView={1} 
  >
    {props.children}
    </Swiper>
  )
}
