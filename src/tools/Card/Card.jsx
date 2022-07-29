import React from 'react'

export default function Card(props) {
  return (
    <div className='cards'>
      <div className="__card">
        {props.children}
      </div>
    </div>
  )
}
