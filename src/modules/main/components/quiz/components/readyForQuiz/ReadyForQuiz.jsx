import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReadyToStartQuiz } from '../../../../../../store/actions/quizAction'; // Укажите правильный путь

const ReadyForQuiz = () => {
    const dispatch = useDispatch();
    const isUserReadyToStartQuiz = useSelector(state => state.quizState.isUserReadyToStartQuiz);
    const toggleUserReady = () => {
        dispatch(fetchUserReadyToStartQuiz(!isUserReadyToStartQuiz));
    };

    return (
        <div>
            {isUserReadyToStartQuiz ? (
                <button onClick={toggleUserReady}>CANCEL</button>
            ) : (
                <button onClick={toggleUserReady}>START</button>
            )}
        </div>
    );
};

export default ReadyForQuiz;

