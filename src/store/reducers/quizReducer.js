import * as actions from "../actions/quizAction";

const initialState = {
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
        case actions.CLEAR_QUESTIONS_STORE:
            return {
                ...state,
                questionsList: [],
            };
        case actions.SET_ANSWERS_LIST_STORE:
            return {
                ...state,
                answersList: [...state.answersList, action.payload],
            };
        case actions.SET_QUESTIONS_LIST_STORE:
            return {
                ...state,
                questionsList: [...action.payload],
            };
        case actions.CLEAR_USERS_RESULTS_STORE:
            return {
                ...state,
                usersResultsList: [],
            };
        case actions.CLEAR_ANSWERS_LIST_STORE:
            return {
                ...state,
                answersList: [],
            };
        case actions.SET_IS_SHOW_RESULTS_STORE:
            return {
                ...state,
                isShowResults: action.payload,
            };
        case actions.SET_QUESTIONS_DOC_ID_STORE:
            return {
                ...state,
                questionsDocId: action.payload,
            };
        case actions.SET_CURRENT_QUESTION_STORE:
            return {
                ...state,
                currentQuestion: [action.payload],
            };
        case actions.CLEAR_CURRENT_QUESTION_STORE:
            return {
                ...state,
                currentQuestion: [],
            };
        case actions.SET_CORRECT_ANSWER_DOC_ID_STORE:
            return {
                ...state,
                correctAnswersCountDocId: action.payload,
            };
        case actions.SET_CORRECT_ANSWERS_COUNT_STORE:
            return {
                ...state,
                correctAnswersCount: state.correctAnswersCount + 1,
            };
        case actions.SET_USER_RESULTS_RESPONSE_STORE:
            return {
                ...state,
                usersResultsList: [...state.usersResultsList, ...action.payload],
            };
        case actions.SET_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [action.payload],
            };
        case actions.CLEAR_CORRECT_ANSWERS_COUNT_STORE:
            return {
                ...state,
                correctAnswersCount: 0,
            };
        case actions.CLEAR_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [],
            };
        case actions.SET_IS_USER_READY_TO_START_QUIZ_STORE:
            return {
                ...state,
                isUserReadyToStartQuiz: action.payload,
            };
        case actions.SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export default quizReducer;

