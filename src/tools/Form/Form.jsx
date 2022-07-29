import React from 'react'
import Button from '../Button/Button'

export default function Form() {
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
