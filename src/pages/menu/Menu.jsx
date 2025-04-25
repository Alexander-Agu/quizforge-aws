import React, { useState } from 'react'
import "./menu.css"

import Header from "../../components/header/Header"
import { menuLevels } from './levels'
import LevelButton from '../../components/levelButton/LevelButton'

function Menu() {
    const [levelDisplay, setLevelDisplay] = useState(1);
    let displayLevel = "Start with the fundamentals of AWS."

    if (levelDisplay === 1) displayLevel = "Start with the fundamentals of AWS.";
    if (levelDisplay === 2) displayLevel = "Tackle questions designed to help you pass the Cloud Practitioner exam.";
    if (levelDisplay === 3) displayLevel = "Take on advanced scenarios to prepare for the Solutions Architect – Associate certification.";
  return (
    <>
        <Header links={"/"} name={"Home"} />
        <main className='menu'>
            <h1 className='menuTitle'>
                Welcome to the AWS Cloud Quiz Challenge!
            </h1>

            <p className='menuIntro'>
                Get ready to test and grow your knowledge of AWS Cloud Computing through interactive, AI-powered quizzes. Whether you're just starting out or preparing for a certification, there's a challenge waiting for you.
            </p>

            <nav className='menuNav'>
                {
                    menuLevels.map(x => {
                        const {type, id} = x;

                        return <LevelButton type={type} id={id} setLevelDisplay={setLevelDisplay} />
                    })
                }
            </nav>

            <p className='menuLevelContent'>
                {displayLevel}
            </p>

            <a href="#" className='menuStartBTN'>
                Start Game
            </a>
        </main>
    </>
  )
}

export default Menu