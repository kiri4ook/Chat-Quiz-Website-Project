import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, FETCH_USER_READY_TO_START_QUIZ, SET_USER_READY_TO_START_QUIZ } from "../actions/quizAction";

const initialState = {
    questions: [],
    isUserReadyToStartQuiz: false,
    loading: false,
    error: null,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: action.payload,
            };
        case FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case FETCH_USER_READY_TO_START_QUIZ:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SET_USER_READY_TO_START_QUIZ:
            return {
                ...state,
                isUserReadyToStartQuiz: action.payload
            };
        default:
            return state;
    }
};

export default quizReducer;

