import {useContext} from 'react';
import QuizContext from '../Helpers/contextHelper';

const Result = () => {

    const {page, setPage, score, setScore} = useContext(QuizContext);

    const backPage = () => {
        setScore(0);
        setPage('main');
    }

    return(
        <div className="container result">
            <h2>Your Score:</h2>
            <h1>{score}</h1>
            <button className="btn-quiz" onClick={() => backPage()}> Back </button>
        </div>
    )
}

export default Result;