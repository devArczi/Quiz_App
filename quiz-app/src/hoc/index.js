import Components from "../components";
import QuizApp from "../components/Quiz-app/QuizApp"
import withQuizApp from "./withQuiz-App/withQuiz-App";
import QuestionData from "../components/Questions/index"
import SimpleQ from '../components/Quiz-app/SimpleQ';


Components.SimpleQ = withQuizApp(props =>  <SimpleQ {...props}/>);