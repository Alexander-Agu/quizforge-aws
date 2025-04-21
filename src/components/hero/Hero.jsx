import React from 'react'
import "./hero.css"
import Welcome from '../welcome/Welcome'

function Hero() {
  return (
    <section className='hero'>
        <p className='introText1'>
            Amazon Web Services cloud computing
        </p>

        <div className="heroNav">
            <p className='introText2'>
                quiz Challenge.
            </p>

            <nav>
                <a href="#">Quiz</a>
                <a href="#">About</a>
                <a href="#">Levels</a>
            </nav>
        </div>

        <div className="viewNav">
            <Welcome />
        </div>

    </section>
  )
}

export default Hero