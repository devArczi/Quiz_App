import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import reorder from './reorder';
import Choice from './Draggable';







const QuizApp = (props) =>{
    const [questionList, setQuestionList] = useState();
    const [question, setQuestion] = useState();
    const [choices, setChoices] = useState([]);
    const [userResult, setUserResult] = useState("");

    useEffect(()=>{
        setQuestion(props.question);
        setChoices(props.choices)
    },[props])

    const QuestionList = React.memo(function QuestionList({ choices }){
        return choices.map((choice, index) => (
            <Choice choice={choice} index={index} key={index}/>
        ));
    });
    
    console.log (Choice)
    
    const check = () => 
    JSON.stringify(choices) === JSON.stringify(props.correct) 
    ? setUserResult("correct") 
    : setUserResult("incorrect");

    const onDragEnd = result => {
        if(!result.destination){
            return;
        }

        if(result.destination.index === result.source.index) {
            return;
        }
        const newChoices = reorder(
            choices,
            result.source.index,
            result.destination.index
        );
        setChoices(newChoices);
    }

    return(
        
        <DragDropContext onDragEnd={onDragEnd}>
        <div className="question_wrapper">
            <h1>{question}</h1>
            <div className={`choices_wrapper ${userResult}`}>
                <Droppable droppableId="list">
                    {provided => (
                        <div>
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                <QuestionList choices={choices} />
                             {provided.placeholder} 
                            </div>
                        </div>
                    )}
                </Droppable>
            </div>
            <button onClick={()=>check()}>Sprawdź</button>
        </div>
        </DragDropContext>
        
    )
}

export default QuizApp;