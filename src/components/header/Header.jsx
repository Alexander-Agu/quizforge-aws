import React from 'react'
import "./header.css"

function Header({links, name}) {
  
  return (
    <header className='header'>
        <div className="headerOverlap">
            <div className="logo">
                <a href="/">
                    <h2>Invi-Tory</h2>
                </a> 
            </div>

            <nav className='navbar'>
                <a href="/login" className='Hsignin'>Home</a>
                <a href="/register" className='Hsignup'>Start Game</a>
            </nav>
        </div>
    </header>
  )
}

export default Header