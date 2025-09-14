import React, { useState } from 'react'
import "./gameOver.css"
import Header from '../../components/header/Header'
import QuizCard from '../../components/quizCard/QuizCard'
import { Link, useParams } from 'react-router-dom'
import ResultCard from "../../components/ResultCard/ResultCard"


function GameOver({data, points, totalQuestions}) {
  const percentage = parseFloat(((points / totalQuestions) * 100).toFixed(2))
  const resultColor = percentage < 50 ? "#e46161" : "#42b883"

  const { levelId } = useParams();
  let currLevel
  if (levelId ==1) currLevel = "Beginner";
  if (levelId == 2) currLevel = "Intermediate";
  if (levelId == 3) currLevel = "Professional";

  return <>
    <main className='gameOver'>
        <section className="gameOverHeader">
            <h1>Quiz Results</h1>

            <h2 style={{color: resultColor}}>{points} / {totalQuestions}</h2>
            <p>You scored <span style={{color: resultColor}}>{percentage}% </span> on the <span style={{"fontWeight": "bolder"}}>{currLevel}</span> level quiz</p>
        </section>

        <section className="quizCards">
          { 
            data.map((x, index) => {
              return <ResultCard key={index} quizNum={index + 1} data={x} />
            })
          }
        </section>

        <Link to={"/"} className='toMenu'>
            Home.
        </Link >
    </main>
  </>
}

export default GameOver