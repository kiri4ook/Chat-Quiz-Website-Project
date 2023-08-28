import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserReadyToStartQuiz, fetchQuestionsRequest, deleteQuestions } from '../../../../../../store/actions/quizAction';




const ReadyForQuiz = () => {
    const dispatch = useDispatch();
    const isUserReadyToStartQuiz = useSelector(state => state.quizState.isUserReadyToStartQuiz);

    useEffect(() => {
        async function startQuizIfPossible() {
            dispatch(fetchQuestionsRequest());
        }

        startQuizIfPossible();
    }, [isUserReadyToStartQuiz]);

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

