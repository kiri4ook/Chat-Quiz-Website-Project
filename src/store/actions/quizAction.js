export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const setQuestion = (payload) => ({
    type: SET_QUESTIONS,
    payload,
})
export const answerQuestion = (payload) => ({
    type: ANSWER_QUESTION,
    payload,
})
export const fetchQuestionRequest = (payload) => ({
    type: FETCH_QUESTIONS_REQUEST,
    payload,
})
export const fetchQuestionSuccess = (payload) => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload,
})
export const fetchQuestionFailure = (payload) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload,
})

