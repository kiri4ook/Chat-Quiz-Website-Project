import React from 'react';
import ReadyForQuiz from './components/readyForQuiz/ReadyForQuiz';
import Game from './components/game';
import Results from './components/results';
import ReadyForGame from './components/readyForGame/ReadyForGame';
import './style.scss';

const Quiz = ({
    isShowResults,
    isQuizInProcess,
    setIsReadyForGame,
    isUserReadyToStartQuiz,
}) => {
    return (
        <div className='quiz-wrapper'>
            {isQuizInProcess ?
                !isShowResults ?
                    <Game />
                    :
                    <Results />
                :
                <ReadyForGame
                    callback={setIsReadyForGame}
                    isUserReadyToStartQuiz={isUserReadyToStartQuiz}
                />
            }
        </div>
    );
};

export default Quiz;

