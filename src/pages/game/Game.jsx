import React, { useEffect, useState } from 'react'
import "./game.css"
import Header from '../../components/header/Header'
import Checkbox from '../../components/checkbox/Checkbox'
import GameOver from '../gameOver/GameOver'
import { useParams } from 'react-router-dom'
import { generateQuizes } from '../../model/quizGenerator'
import { quizes } from '../../testData'
import AnswerButton from '../../ui/AnswerButton/AnswerButton'
import LoadScreen from "../LoadScreen/LoadScreen"

function Game() {
  const { levelId } = useParams(); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalQuestions = data.length;

  let currLevel
  if (levelId == 1) currLevel = "Beginner";
  if (levelId == 2) currLevel = "Intermediate";
  if (levelId == 3) currLevel = "Professional";
  
  const [show, setShow] = useState(0)
  const [getAnswer, setGetAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [correctCollection, setCorrectCollection] = useState([]);
  const [reset, setReset] = useState();

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizNum, setQuizNum] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1)

  useEffect(() => {
    const getQuizesData = async () => {
      try {
        const res = await generateQuizes(parseInt(levelId));
        setData(res);
      } catch (error) {
        console.log('Error fetching quizzes:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getQuizesData();
  }, [levelId]); 


  const next = ()=> {
    if (selectedAnswer === "") {
      alert("Please choose an answer")
    }
    
    else if (selectedAnswer !== "" && questionNumber <= totalQuestions){
      setQuizNum(prev => prev + 1);
      setQuestionNumber(prev => prev + 1);
      

      if (selectedAnswer === data[quizNum].correct){
        setPoints(prev => prev + 1);
        setSelectedAnswer("")
        data[quizNum].result = selectedAnswer
        
      } else{
        data[quizNum].result = selectedAnswer
      }

      setSelectedAnswer("")
    }
  }


  const prev = ()=> {
    if (questionNumber > 1){
    const prevIndex = quizNum - 1;

    setQuizNum(prevIndex);
    setQuestionNumber(prev => prev - 1);
    setSelectedAnswer(data[prevIndex].result || "");
    }
  }


  // Loading screen
  if (loading === true) return <LoadScreen />

  // Gameover
  if (questionNumber > totalQuestions) {
    return <GameOver 
      data={data}
      points={points}
      totalQuestions={totalQuestions}
    />
  }

  // Gameplay
  else{
    return (
      <>
        <main className='game-container'>
          <div className="game-wrapper">
            <section className='details'>
              <h2>{currLevel} Level</h2>
              <p>Question {questionNumber} of {totalQuestions}</p>
            </section>


            <section className='quiz-container'>
              <h2 className='question'>{data[quizNum].quiz}</h2>

              <div className="quiz-options">
                <AnswerButton setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} quiz={data[quizNum].a} quizLetter={"A"} answer={"a"}/>
                <AnswerButton setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} quiz={data[quizNum].b} quizLetter={"B"} answer={"b"}/>
                <AnswerButton setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} quiz={data[quizNum].c} quizLetter={"C"} answer={"c"}/>
                <AnswerButton setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} quiz={data[quizNum].d} quizLetter={"D"} answer={"d"}/>
              </div>
            </section>

            <section className='next-sec'>
              <div className="back-buttons">
                {/* <button className='prev' onClick={()=> prev()}>
                  previous
                </button> */}
                  
                <button className='quit' onClick={()=> {location.href = "/"}}>
                  Quit
                </button>
              </div>

              <button className='next' onClick={()=>next()}> Next </button>
            </section>
          </div>
        </main>
      </>
    )
  }
}

export default Game