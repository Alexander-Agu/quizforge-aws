import React from 'react'
import "./card.css"

function Card() {
  return (
    <div className="card">
        <p className='cardTopic'>
            Purpose of the Platform
        </p>

        <p className='cardContent'>
            This platform is built to support learners in mastering AWS Cloud Computing through an engaging, quiz-based learning experience. Whether you're new to cloud technologies or preparing for AWS certification, the platform provides an effective way to reinforce your knowledge and track your progress.
        </p>
    </div>
  )
}

export default Card