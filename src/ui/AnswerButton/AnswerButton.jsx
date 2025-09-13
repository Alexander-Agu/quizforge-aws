import React from 'react'
import "./answerButton.css"

export default function AnswerButton({setSelectedAnswer, selectedAnswer,answer, quiz, quizLetter}) {

    const selectAnswer = ()=> {
        setSelectedAnswer(answer)
    }

  return (
    <button className={`choice ${selectedAnswer === answer? "selected-quiz" : ""}`} onClick={()=> selectAnswer()} >
        {quizLetter}. {quiz}
    </button>
  )
}