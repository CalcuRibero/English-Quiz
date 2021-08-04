import React from 'react';
import './App.css';
import Main from './Components/Main';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import QuizContext from './Helpers/contextHelper';
import { useState } from 'react';

function App() {

  const [pageState, setPage] = useState('main');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Prepositions Practices</h1>
      <QuizContext.Provider value={{pageState, setPage, score, setScore}}>
        {pageState === 'main' && <Main/>}
        {pageState === 'quiz' && <Quiz/>}
        {pageState === 'result' && <Result/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
