import {
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    FETCH_USER_READY_TO_START_QUIZ,
    SET_USER_READY_TO_START_QUIZ,
    SET_QUESTIONS,
    DELETE_QUESTIONS,
    CLEAR_QUESTIONS_STORE,
    SET_ANSWERS_LIST_STORE,
    SET_QUESTIONS_LIST_STORE,
    CLEAR_USERS_RESULTS_STORE,
    CLEAR_ANSWERS_LIST_STORE,
    SET_IS_SHOW_RESULTS_STORE,
    SET_QUESTIONS_DOC_ID_STORE,
    SET_CURRENT_QUESTION_STORE,
    CLEAR_CURRENT_QUESTION_STORE,
    SET_CORRECT_ANSWER_DOC_ID_STORE,
    SET_CORRECT_ANSWERS_COUNT_STORE,
    SET_USER_RESULTS_RESPONSE_STORE,
    SET_CURRENT_USER_READINESS_STORE,
    CLEAR_CORRECT_ANSWERS_COUNT_STORE,
    CLEAR_CURRENT_USER_READINESS_STORE,
    SET_IS_USER_READY_TO_START_QUIZ_STORE,
    SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE

} from "../actions/quizAction";

const initialState = {
    questions: [],
    isUserReadyToStartQuiz: false,
    loading: false,
    error: null,
    answersList: [],
    questionsList: [],
    isShowResults: false,
    questionsDocId: '',
    currentQuestion: [],
    usersResultsList: [],
    correctAnswersCount: 0,
    currentUserReadiness: [],
    isUserReadyToStartQuiz: false,
    correctAnswersCountDocId: '',
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
        case SET_QUESTIONS:
            return {
                ...state,
                loading: false,
                questions: action.payload,
            };
        case DELETE_QUESTIONS:
            return {
                ...state,
                questions: [],
            };
        case CLEAR_QUESTIONS_STORE:
            return {
                ...state,
                questionsList: [],
            };
        case SET_ANSWERS_LIST_STORE:
            return {
                ...state,
                answersList: [...state.answersList, action.payload],
            };
        case SET_QUESTIONS_LIST_STORE:
            return {
                ...state,
                questionsList: [...action.payload],
            };
        case CLEAR_USERS_RESULTS_STORE:
            return {
                ...state,
                usersResultsList: [],
            };
        case CLEAR_ANSWERS_LIST_STORE:
            return {
                ...state,
                answersList: [],
            };
        case SET_IS_SHOW_RESULTS_STORE:
            return {
                ...state,
                isShowResults: action.payload,
            };
        case SET_QUESTIONS_DOC_ID_STORE:
            return {
                ...state,
                questionsDocId: action.payload,
            };
        case SET_CURRENT_QUESTION_STORE:
            return {
                ...state,
                currentQuestion: [action.payload],
            };
        case CLEAR_CURRENT_QUESTION_STORE:
            return {
                ...state,
                currentQuestion: [],
            };
        case SET_CORRECT_ANSWER_DOC_ID_STORE:
            return {
                ...state,
                correctAnswersCountDocId: action.payload,
            };
        case SET_CORRECT_ANSWERS_COUNT_STORE:
            return {
                ...state,
                correctAnswersCount: state.correctAnswersCount + 1,
            };
        case SET_USER_RESULTS_RESPONSE_STORE:
            return {
                ...state,
                usersResultsList: [...state.usersResultsList, ...action.payload],
            };
        case SET_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [action.payload],
            };
        case CLEAR_CORRECT_ANSWERS_COUNT_STORE:
            return {
                ...state,
                correctAnswersCount: 0,
            };
        case CLEAR_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [],
            };
        case SET_IS_USER_READY_TO_START_QUIZ_STORE:
            return {
                ...state,
                isUserReadyToStartQuiz: action.payload,
            };
        case SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default quizReducer;

