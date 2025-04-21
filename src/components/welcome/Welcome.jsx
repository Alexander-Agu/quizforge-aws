import React from 'react'
import "./welcome.css"

function Welcome() {
  return (
    <section className='welcomeContainer'>
        <p className='welcomeMassage'>
            Our platform is an AI driven learning environment 
            built to help users master AWS Cloud Computing through dynamic quizzes 
            tailored to different skill levels
            ,from beginners learning the basics to professionals preparing for advanced certifications.

        </p>

        <div className="welcomeStart">
            <a href='#'>
                Start Quiz
            </a>
        </div>
    </section>
  )
}

export default Welcome