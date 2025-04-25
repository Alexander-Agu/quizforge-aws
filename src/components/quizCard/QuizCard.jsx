import React from 'react'
import "./quizCard.css"

function QuizCard({question, answer, correct, why}) {
  return (
    <div className="quizCard">
        <section className='QcardTop'>
            <h1 className='QcardQuestion'>
                {question}
            </h1>

            <p className='playerAnswer'>
                Answer: {answer}
            </p>
        </section>

        <section className='QcardBottom'>
            <p className='correctAnswer'>
                Correct: {correct} 
            </p>

            <p className='why'>
                Why: {why}
            </p>
        </section>
    </div>
  )
}

export default QuizCard