import React ,{useState} from 'react'
import question from "../public/question.json"
const App = () => {
  const[currentIndex,setCurrentIndex]=useState(0);
  const[score,setScore]=useState(0);
  if (option === question[currentIndex].answer) {
	setScore(score + 1);
  }
  if (currentIndex < question.length - 1){
	setCurrentIndex(currentIndex + 1);
  }else {
	alert("Your Score: " + score);
  }
  const checkAnswer=(option)=>{
    if(currentIndex<question.length-1)
    {
      setCurrentIndex(currentIndex+1);
    }
    else
    {
      alert("Your Score: " + score);
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