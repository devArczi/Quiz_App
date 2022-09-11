import QuizApp2 from "./withQuiz-App";
import SimpleQ2 from "./withQuiz-App";

const withQuizApp = Component => props => {
    console.log(props.counter)
    return(
        <div>
            {
                props.counter === 1
                ?<SimpleQ2 {...props}/>
                :<Component {...props}/>            
            }
        </div>
    )
}

export default withQuizApp;