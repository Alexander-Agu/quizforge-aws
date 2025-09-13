import React from 'react'
import "./resultCard.css"
import TextBlock from '../../ui/TextBlock/TextBlock'

export default function ResultCard({quizNum, data}) {
  console.log(data)
  const {quiz, a, b, c, d, correct, why, result} = data;
  
  // Checking correctness of the answer
  const isCorrect = result === correct

  return (
    <div className="result-card">
        <h2 className='final-result'>
          
          Q{quizNum}: 

          <span className='result-type' style={{"backgroundColor": isCorrect? "#42b883" : "#e46161"}}>
            {isCorrect? "Correct" : "Incorrect"}
            </span>
        </h2>

        <h1 className='quiz-answer'>{quiz}?</h1>

        <TextBlock headerText={"Your Answer:"} text={result.toUpperCase() + ". " + data[result]} color={isCorrect? "#42b883" : "#e46161"}/>
        <TextBlock headerText={"Correct Answer:"} text={correct.toUpperCase() + ". " + data[correct]} color={"#42b883"}/>
        <TextBlock headerText={"Explanation:"} text={why} color={"black"}/>
        {/* <TextBlock />
        <TextBlock /> */}
    </div>
  )
}