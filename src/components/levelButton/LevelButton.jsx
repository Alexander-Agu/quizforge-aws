import React from 'react'
import "./levelButton.css"

function LevelButton({type, id, setLevelDisplay, setChooseLevel}) {
  return (
    <button key={id} onClick={() => {
      setLevelDisplay(id);
      setChooseLevel(id);
    }}>
        {type}
    </button>
  )
}

export default LevelButton