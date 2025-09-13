import React, { useState } from 'react'
import "./hero.css"
import Welcome from '../welcome/Welcome'
import Info from '../info/Info'
import { about, levels, selectedTab, unSelectedTab } from './heroData'
import Card from '../card/Card'


function Hero() {
    const [level, setLevel] = useState(-1);
    const [selectedLevel, setSelectedLevel] = useState(-1);

    const startGame = ()=> {
        if (selectedLevel < 0){
            alert("Click on the difficulty level above then start your quiz")
        }

        else{
            console.log("To game")
            location.href = `/game/${selectedLevel + 1}`
        }
    }
    
  return (
    <article className='hero'>
        <section className='intro'>
            <h1>QUIZ FORGE AWS</h1>

            <h2>Welcome to the AWS quiz challenge!</h2>

            <p>
                Get ready to test and grow your knowlwdge of AWS Cloud Computing through interactive, AI powered quizzes. Whether you're just starting out or preparing for a certificate, there's a challenge waiting for you.
            </p>
        </section>


        <section className='levels'>
            <h2 className='level-intro'>Quiz Level Options:</h2>

            <div className="options">

                {
                    about.map((x, index) => {
                        return <Card
                            setLevel={setSelectedLevel} 
                            level={index} 
                            selectedLevel={selectedLevel}
                            data={x} 
                        />
                    })
                }
            </div>
        </section>


        <section className='to-game'>
            <button onClick={()=> startGame()} className='start-btn'>Start Quiz!</button>
            <p>Click on the difficulty level above then start your quiz</p>
        </section>
    </article>
  )
}

export default Hero