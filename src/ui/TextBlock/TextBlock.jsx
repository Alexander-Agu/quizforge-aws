import React from 'react'
import "./textBlock.css"

export default function TextBlock({headerText, text, color}) {
  return (
    <div className="text-block">
        <h2>
            {headerText}
        </h2>

        <p style={{"color": color}}>
            {text}
        </p>
    </div>
  )
}