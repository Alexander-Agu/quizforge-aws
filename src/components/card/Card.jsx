import React from 'react'
import "./card.css"

function Card({title, content}) {
  return (
    <div className="card">
        <p className='cardTopic'>
            {title}
        </p>

        <p className='cardContent'>
            {content}
        </p>
    </div>
  )
}

export default Card