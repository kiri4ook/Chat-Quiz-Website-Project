import React from 'react';
import Quiz from './components/quiz/Quiz';
import Chat from './components/chat/Chat';
import './style.scss';
import { createSelector } from 'reselect';

function Main() {
    return (
        <div className='chat-quiz-wrapper'>
            <Quiz />
            <Chat />
        </div>
    );
}

export const getUserId = state => state.userState.userId;
export const getMessages = state => state.chatState.messages;
export const getQuestionsList = state => state.quizState.questionsList;
export const getIsShowResults = state => state.quizState.isShowResults;
export const getCurrentQuestion = state => state.quizState.currentQuestion;
export const getAnswerResultList = state => state.quizState.answersList;
export const getUsersResultsList = state => state.quizState.usersResultsList;
export const getCurrentUserReadiness = state => state.quizState.currentUserReadiness;
export const getIsUserReadyToStartQuiz = state => state.quizState.isUserReadyToStartQuiz;

export const isQuizInProcess = createSelector(
    getQuestionsList,
    getIsShowResults,
    (questionsList, isShowResults) => (questionsList.length || isShowResults)
);

export const textSelector = createSelector(
    getCurrentQuestion,
    question => {
        if (question.length) {
            return question[0].question;
        }
    }
);

export const correctAnswerSelector = createSelector(
    getCurrentQuestion,
    question => {
        if (question.length) {
            return question[0].correct_answer;
        }
    }
);

export const incorrectAnswersSelector = createSelector(
    getCurrentQuestion,
    question => {
        if (question.length) {
            return question[0].incorrect_answers;
        }
    }
);

export const answersSelector = createSelector(
    correctAnswerSelector,
    incorrectAnswersSelector,
    (correctAnswer, incorrectAnswers) => {
        if (correctAnswer && incorrectAnswers.length) {
            const answersList = [...incorrectAnswers, correctAnswer];

            return answersList.sort();
        }
    }
);

export default Main;
