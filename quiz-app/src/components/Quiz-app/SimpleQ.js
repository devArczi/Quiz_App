import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const SimpleQ = (props) => {
    const [buttonResult, setButtonResult] = useState("unclick");
    const [buttonResult1, setButtonResult1] = useState("unclick");
    const [buttonResult2, setButtonResult2] = useState("unclick");
    const [buttonResult3, setButtonResult3] = useState("unclick");
    const [choice, setChoice] = useState();
    const [correct, setCorrect] = useState("")
    const [count, setCount] = useState(0)
    const [points, setPoints] = useState(0);
    const [finish1, setFinish1] = useState("quiz__button--finish");

    const category = localStorage.getItem("category")


    console.log(props.data[category])
    
    
    const Mark = ()=>{
        if(buttonResult === "unclick"){
            setButtonResult("click")
            setChoice(props.data[category][count].Choice1)
        }
        if(buttonResult === "click"){
            setButtonResult("unclick")
        }
    }
    const Mark1 = ()=>{
        if(buttonResult1 === "unclick"){
            setButtonResult1("click")
            setChoice(props.data[category][count].Choice2)
        }
        if(buttonResult1 === "click"){
            setButtonResult1("unclick")
        }
    }
    const Mark2 = ()=>{
        if(buttonResult2 === "unclick"){
            setButtonResult2("click")
            setChoice(props.data[category][count].Choice3)
        }
        if(buttonResult2 === "click"){
            setButtonResult2("unclick")
        }
    }
    const Mark3 = ()=>{
        if(buttonResult3 === "unclick"){
            setButtonResult3("click")
            setChoice(props.data[category][count].Choice4)
        }
        if(buttonResult3 === "click"){
            setButtonResult3("unclick")
        }
    }
    const checkAnswer = () => {
        if(props.data[category][count].Answer === choice ){
            setCorrect("correct")
            setButtonResult("unclick")
            setPoints(points + 1 )
            
        }
        else{
            setCorrect("incorrect")
            setPoints(points)
        }
    }
    const reset = ()=>{
        setCorrect("")
        setButtonResult("unclick")
        setButtonResult1("unclick")
        setButtonResult2("unclick")
        setButtonResult3("unclick")
    }

    const finish = ()=>{
        if(count === 9){
            setFinish1("quiz__button--finished")
        }
    }
    localStorage.setItem('points', points)
    

    return(
        
        <div>
            <div className='quiz__header'>{props.data[category][count].Question}</div>
            <div className="quiz__wrapper">
                <div className='quiz__wrapper--wrapper'>
                    <div>
                        <button className={`quiz__button--answer ${buttonResult} ${correct}`} onClick={()=>Mark()}><span>{props.data[category][count].Choice1}</span></button>
                    </div>
                    <div className={`quiz__check ${correct}`}></div>
                </div>
                <div>
                    <button className={`quiz__button--answer ${buttonResult1} ${correct}`} onClick={()=>Mark1()}><span>{props.data[category][count].Choice2}</span></button>
                </div>
                <div>
                    <button className={`quiz__button--answer ${buttonResult2} ${correct}`} onClick={()=>Mark2()}><span>{props.data[category][count].Choice3}</span></button>
                </div>
                <div>
                    <button className={`quiz__button--answer ${buttonResult3} ${correct}`} onClick={()=>Mark3()}><span>{props.data[category][count].Choice4}</span></button>
                </div>
            </div>
            <button onClick={()=>checkAnswer()}>Sprawdź Odpowiedź</button>
            <button onClick={()=>{setCount(count+1); reset()}} >Zmień Pytanie</button>
            <div>{points}/10</div>
            <Link to='/Result'>
                <button onClick={()=>finish()} className={` ${finish1}`}>Zakończ</button>
            </Link>

        </div>
    )

}
export default SimpleQ