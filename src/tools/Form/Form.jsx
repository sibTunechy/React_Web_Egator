import React from 'react';
import Button from '../Button/Button';
import './form.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com'



export default function Form() {
  // const form = useRef()
  return (
    <form action=''>
      <input type="text" name="name" placeholder='YOUR FULL NAME' required />
      <input type="email" name="email" placeholder='YOUR EMAIL' required />
      <textarea name="text" rows="7" placeholder='Your Text Here'></textarea>
      <Button type="submit">
      <a href="" className='btn btn-primary'>SEND MESSAGE</a>
      </Button>
    </form>
  )
}
