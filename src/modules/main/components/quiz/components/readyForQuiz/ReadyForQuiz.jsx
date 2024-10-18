import React from 'react';
import './styles.scss';

const ReadyForQuiz = ({
    callback,
    isUserReadyToStartQuiz,
}) => {
    return (
        <div className="ready-for-game-wrapper">
            <span className="ready-text">
                {isUserReadyToStartQuiz
                    ? 'Ready to start The Quiz'
                    : 'START if you are ready to start Quiz'}
            </span>
            <button
                onClick={callback}
                className={`custom-button ${isUserReadyToStartQuiz ? 'cancel-button' : 'start-button'}`}
            >
                {isUserReadyToStartQuiz ? 'CANCEL' : 'START'}
            </button>
        </div>
    );
};

export default ReadyForQuiz;

