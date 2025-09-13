import React from 'react'
import "./card.css"


function Card({setLevel, selectedLevel, level , data}) {
  const {icon, title, headerText, content} = data;
  return (
    <div className={`card-container ${selectedLevel === level? " selected " : "normal"}`}
    onClick={()=> {
      setLevel(level)
    }}
    >
      <h1 className={` ${selectedLevel === level? " selected-h2 " : "normal"}`}>{icon}</h1>

      <h2 className={` ${selectedLevel === level? " selected-h2 " : "normal"}`}>{title}</h2>

      <p className={`card-des ${selectedLevel === level? " selected-h2 " : "normal"}`}>{headerText}</p>

      <p className='covers'>
        {content}
      </p>
    </div>
  )
}

export default Card