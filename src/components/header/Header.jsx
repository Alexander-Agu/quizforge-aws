import React from 'react'
import "./header.css"

function Header({links}) {
  return (
    <header className='header'>
        <a href="#" className='headerLogo'>QUIZ FORGE AWS</a>

        <a href="#" className='headerNav'>Start Quiz</a>
    </header>
  )
}

export default Header