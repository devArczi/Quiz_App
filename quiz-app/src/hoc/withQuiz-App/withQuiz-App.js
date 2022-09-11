import React from 'react';
import { useState } from 'react';
import QuestionData from '../../components/Questions/index';

const SimpleQ2 = () => {
    const [buttonResult, setButtonResult] = useState("unclick");
    const [buttonResult1, setButtonResult1] = useState("unclick");
    const [buttonResult2, setButtonResult2] = useState("unclick");
    const [buttonResult3, setButtonResult3] = useState("unclick");
    const [choice, setChoice] = useState();
    const [correct, setCorrect] = useState("")


    const Mark = ()=>{
        if(buttonResult === "unclick"){
            setButtonResult("click")
            setChoice(QuestionData.questions.q3.choices[0])
        }
        if(buttonResult === "click"){
            setButtonResult("unclick")
        }
    }
    const Mark1 = ()=>{
        if(buttonResult1 === "unclick"){
            setButtonResult1("click")
            setChoice(QuestionData.questions.q3.choices[1])
        }
        if(buttonResult1 === "click"){
            setButtonResult1("unclick")
        }
    }
    const Mark2 = ()=>{
        if(buttonResult2 === "unclick"){
            setButtonResult2("click")
            setChoice(QuestionData.questions.q3.choices[2])
        }
        if(buttonResult2 === "click"){
            setButtonResult2("unclick")
        }
    }
    const Mark3 = ()=>{
        if(buttonResult3 === "unclick"){
            setButtonResult3("click")
            setChoice(QuestionData.questions.q3.choices[3])
        }
        if(buttonResult3 === "click"){
            setButtonResult3("unclick")
        }
    }
    const checkAnswer = () => {
        if(QuestionData.questions.q3.correct[0] === choice ){
            setCorrect("correct")
            setButtonResult("unclick")
        }
        else{
            setCorrect("incorrect")
        }
    }


    console.log(choice)
    console.log(QuestionData.questions)
    return(
        <div>
            <div className='Answer'>{QuestionData.questions.q3.question}</div>
            <div className="Answer_wrapper">
                <div className='Answer_wrapper_wrapper'>
                    <div>
                    <button className={`Button_answer ${buttonResult} ${correct}`} onClick={()=>Mark()}><span>{QuestionData.questions.q3.choices[0]}</span></button>
                    </div>
                    <div className={`Answer_check ${correct}`}></div>
                </div>
                <div>
                    <button className={`Button_answer ${buttonResult1} ${correct}`} onClick={()=>Mark1()}><span>{QuestionData.questions.q3.choices[1]}</span></button>
                </div>
                <div>
                <button className={`Button_answer ${buttonResult2} ${correct}`} onClick={()=>Mark2()}><span>{QuestionData.questions.q3.choices[2]}</span></button>
                </div>
                <div>
                <button className={`Button_answer ${buttonResult3} ${correct}`} onClick={()=>Mark3()}><span>{QuestionData.questions.q3.choices[3]}</span></button>
                </div>
            </div>
            <button onClick={()=>checkAnswer()}>Sprawdź Odpowiedź</button>
        </div>
    )
}
export default SimpleQ2