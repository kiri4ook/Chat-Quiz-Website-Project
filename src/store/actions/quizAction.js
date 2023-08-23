export const FETCH_USER_READY_TO_START_QUIZ = 'FETCH_USER_READY_TO_START_QUIZ';
export const SET_USER_READY_TO_START_QUIZ = 'SET_USER_READY_TO_START_QUIZ';
export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const fetchUserReadyToStartQuiz = (payload) => ({
    type: FETCH_USER_READY_TO_START_QUIZ,
    payload,
})

export const setUserReadyToStartQuiz = (payload) => ({
    type: SET_USER_READY_TO_START_QUIZ,
    payload,
})

export const fetchQuestionRequest = (payload) => ({
    type: FETCH_QUESTIONS_REQUEST,
    payload,
})

export const fetchQuestionSuccess = (payload) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload,
})
export const fetchQuestionFailure = (payload) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload,
})

