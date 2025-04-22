import React from 'react'
import "./LevelButton.css"

function LevelButton({type, id, setLevelDisplay}) {
  return (
    <button key={id} onClick={() => setLevelDisplay(id)}>
        {type}
    </button>
  )
}

export default LevelButton