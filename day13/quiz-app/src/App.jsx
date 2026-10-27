import React ,{useState} from 'react'
import question from "../public/question.json"
const App = () => {
  const[currentIndex,setCurrentIndex]=useState(0);
  const checkAnswer=(option)=>{
    if(currentIndex<question.length-1)
    {
      setCurrentIndex(currentIndex+1);
    }
    else
    {
      alert("Your Score:")
    }
  }
  return (
    <div>
      <h1>Quiz App</h1>
      <p>Question {currentIndex+1} of {question.length}</p>
      <p>Question: {question[currentIndex].question} </p>
      <div>

      {question[currentIndex].options.map((option,index)=>
      <button key ={index}
        onClick={()=>checkAnswer(option)}>
       {option}
      </button>
    )}
      </div>
    </div>
  )
}

export default App