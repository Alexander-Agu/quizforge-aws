import React from 'react'
import "./header.css"

function Header({links, name}) {
  
  return (
    <header className='header'>
        <a href="/" className='headerLogo'>QUIZ FORGE AWS</a>

        <a href={links} className='headerNav'>{name}</a>
    </header>
  )
}

export default Header