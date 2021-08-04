import { useState, useContext } from "react";
import QuizContext from "../Helpers/contextHelper";
import Data from '../Helpers/data/prepositions-activities.json';

const Quiz = () => {
    
    const [quizOrder, setQuiz] = useState(0);
    const [choice, setChoice] = useState(null);
    const {pageState, setPage, score, setScore} = useContext(QuizContext);

    const changeQuiz = () => {
        if (choice === Data[quizOrder].value){
            setScore(score + 1);
        }
        setChoice('');
        setQuiz(quizOrder + 1);
    }

    const endQuiz = () => {
        if (choice === Data[quizOrder].value){
            setScore(score + 1);
        }
        setPage('result')
    }

    return(
        <div className="container quiz">
            <label className="label-quiz">
                <b>{Data[quizOrder].before}</b>
                <select className="input-select" type="text" onChange={
                    (event) => setChoice(event.target.value)}>
                    <option></option>
                    <option value="at">at</option>
                    <option value="in">in</option>
                    <option value="on">on</option>
                </select>
                <b>{Data[quizOrder].after}</b>
            </label>
            {quizOrder < (Data.length - 1) ? <button className="btn-quiz" onClick = {() => changeQuiz()}> Next </button> : 
            <button className="btn-quiz" onClick = {() => endQuiz()}> End </button>}
        </div>
    )
}

export default Quiz;