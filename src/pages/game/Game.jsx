import React, { useEffect, useState } from 'react'
import "./game.css"
import Header from '../../components/header/Header'
import Checkbox from '../../components/checkbox/Checkbox'
import { quizes } from '../../testData'
import GameOver from '../gameOver/GameOver'

function Game() {
  let data = quizes;
  const totalQuestions = quizes.length;
  const [questionNumber, setQuestionNumber] = useState(1)
  const [show, setShow] = useState(0)
  const [getAnswer, setGetAnswer] = useState();
  const [points, setPoints] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [correctCollection, setCorrectCollection] = useState([]);


  const next = ()=>{
    if (getAnswer === data[show].correct) {
      setPoints(prev => prev + 1);
    }

    setQuestionNumber(prev => prev + 1);
    setShow(prev => prev + 1);
    setAnswer(prev => [...prev, data[show][getAnswer]])
    setCorrectCollection(prev => [...prev, data[show][data[show].correct]])
  }

  if (questionNumber > totalQuestions) {
    return <GameOver 
      data={data}
      answers={answers}
      correctCollection={correctCollection}
      points={points}
      questions={totalQuestions}
    />
  }
  else{
    return (
      <>
      <Header />
      <main className='gameApp'>
        <section className='gameHeader'>
            <p className='questionNumber'>
                {questionNumber} / {totalQuestions}
            </p>

            <p className='question'>
                {data[show].quiz}
            </p>
        </section>

        <Checkbox 
            a={data[show].a}
            b={data[show].b}
            c={data[show].c}
            d={data[show].d} 
            setAnswer={setGetAnswer}
            data={Object.keys(data[show])}
          />

        <div className="nextBTN">
          <button onClick={()=> next()}>
            next.
          </button>
        </div>
      </main>
      </>
    )
  }
}

export default Game