import React, { useState } from 'react'
import "./hero.css"
import Welcome from '../welcome/Welcome'
import Info from '../info/Info'
import { about, levels, selectedTab, unSelectedTab } from './heroData'

function Hero() {
    const [nav, setNav] = useState(0);
    let display = <Welcome />

    if (nav === 0){
        display = <Welcome />;
    } else if (nav === 1){
        display = <Info cards={about} />;
    } else if (nav === 2){
        display = <Info cards={levels} />;
    }


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
                <p className='navDisplay' style={{}} onClick={() => setNav(0)}>Quiz</p>
                <p className='navDisplay' onClick={() => setNav(1)}>About</p>
                <p className='navDisplay' onClick={() => setNav(2)}>Levels</p>
            </nav>
        </div>

        <div className="viewNav">
            {display}
        </div>

    </section>
  )
}

export default Hero