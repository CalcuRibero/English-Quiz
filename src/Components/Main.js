import { useContext } from "react";
import QuizContext from "../Helpers/contextHelper";

const Main = () => {

    const {pageState, setPage} = useContext(QuizContext);

    return(
        <div className="main container">
            <h2>Are you ready?</h2>
            <button  className="btn-quiz" onClick={() => setPage('quiz')}> Let's Go </button>
        </div>
    )
}

export default Main;