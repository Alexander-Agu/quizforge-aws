import React, { useState } from 'react'
import "./gameOver.css"
import Header from '../../components/header/Header'
import QuizCard from '../../components/quizCard/QuizCard'

function GameOver({data, answers, correctCollection, points, questions}) {
    let answerNum = -1
    let scoreMessage = ""

    function calculatePercentage(points, total) {
        if (total === 0) return 0;
        return Math.round((points / total) * 100);
    }

    const scorePercentage = calculatePercentage(points, questions);

    if (scorePercentage == 100) scoreMessage = "You passed!";
    else if(scorePercentage > 50) scoreMessage = "Barely passed!";
    else if (scorePercentage >= 30 && scorePercentage <= 50) scoreMessage = "Failed but not bad!";
    else scoreMessage = "SIESSSS!";

    
  return <>
    <Header />
    <main className='gameOver'>
        <div className="gameOverHeader">
            <h2>{points} / {questions}</h2>
            <h1>{scoreMessage}</h1>
        </div>

        <div className="quizCards">
            {
                data.map(x => {
                    const {quiz, why} = x;
                    answerNum += 1;
                    return <QuizCard key={quiz}
                        question={quiz}
                        answer={answers[answerNum]}
                        correct={correctCollection[answerNum]}
                        why={why}
                    />
                })
            }
        </div>

        <button className='toMenu'>
            Menu.
        </button>
    </main>
  </>
}

export default GameOver