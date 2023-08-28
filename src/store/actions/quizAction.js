export const FETCH_USER_READY_TO_START_QUIZ = 'FETCH_USER_READY_TO_START_QUIZ';
export const SET_USER_READY_TO_START_QUIZ = 'SET_USER_READY_TO_START_QUIZ';
export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const DELETE_QUESTIONS = 'DELETE_QUESTIONS';
export const CLEAR_QUESTIONS_STORE = 'CLEAR_QUESTIONS_STORE';
export const SET_ANSWERS_LIST_STORE = 'SET_ANSWERS_LIST_STORE';
export const SET_QUESTIONS_LIST_STORE = 'SET_QUESTIONS_LIST_STORE';
export const CLEAR_USERS_RESULTS_STORE = 'CLEAR_USERS_RESULTS_STORE';
export const CLEAR_ANSWERS_LIST_STORE = 'CLEAR_ANSWERS_LIST_STORE';
export const SET_IS_SHOW_RESULTS_STORE = 'SET_IS_SHOW_RESULTS_STORE';
export const SET_QUESTIONS_DOC_ID_STORE = 'SET_QUESTIONS_DOC_ID_STORE';
export const SET_CURRENT_QUESTION_STORE = 'SET_CURRENT_QUESTION_STORE';
export const CLEAR_CURRENT_QUESTION_STORE = 'CLEAR_CURRENT_QUESTION_STORE';
export const SET_CORRECT_ANSWER_DOC_ID_STORE = 'SET_CORRECT_ANSWER_DOC_ID_STORE';
export const SET_CORRECT_ANSWERS_COUNT_STORE = 'SET_CORRECT_ANSWERS_COUNT_STORE';
export const SET_USER_RESULTS_RESPONSE_STORE = 'SET_USER_RESULTS_RESPONSE_STORE';
export const SET_CURRENT_USER_READINESS_STORE = 'SET_CURRENT_USER_READINESS_STORE';
export const CLEAR_CORRECT_ANSWERS_COUNT_STORE = 'CLEAR_CORRECT_ANSWERS_COUNT_STORE';
export const CLEAR_CURRENT_USER_READINESS_STORE = 'CLEAR_CURRENT_USER_READINESS_STORE';
export const SET_IS_USER_READY_TO_START_QUIZ_STORE = 'SET_IS_USER_READY_TO_START_QUIZ_STORE';
export const SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE = 'SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE';
export const SET_DATA_TO_LOCAL_STORAGE = 'SET_DATA_TO_LOCAL_STORAGE';
export const REMOVE_ITEM_FROM_LOCAL_STORAGE = 'REMOVE_ITEM_FROM_LOCAL_STORAGE';
export const GET_QUIZ_DATA_FROM_LOCAL_STORAGE = 'GET_QUIZ_DATA_FROM_LOCAL_STORAGE';
export const GET_ITEM_FROM_LOCAL_STORAGE_TO_STORE = 'GET_ITEM_FROM_LOCAL_STORAGE_TO_STORE';
export const SET_IS_READY_FOR_GAME = 'SET_IS_READY_FOR_GAME';
export const SET_IS_SHOW_RESULTS = 'SET_IS_SHOW_RESULTS';
export const SET_USER_RESULTS_RESPONSE = 'SET_USER_RESULTS_RESPONSE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const fetchUserReadyToStartQuiz = (payload) => ({
    type: FETCH_USER_READY_TO_START_QUIZ,
    payload,
})

export const setUserReadyToStartQuiz = (payload) => ({
    type: SET_USER_READY_TO_START_QUIZ,
    payload,
})

export const fetchQuestionsRequest = (payload) => ({
    type: FETCH_QUESTIONS_REQUEST,
    payload,
})

export const fetchQuestionsSuccess = (payload) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload,
})

export const fetchQuestionsFailure = (payload) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload,
})

export const setQuestions = (docId, questions) => ({
    type: SET_QUESTIONS,
    payload: { docId, questions },
})

export const deleteQuestions = () => ({
    type: DELETE_QUESTIONS,
})

export const clearQuestionsStore = payload => ({ type: CLEAR_QUESTIONS_STORE, payload });
export const clearAnswersListStore = payload => ({ type: CLEAR_ANSWERS_LIST_STORE, payload });
export const setDataToLocalStorage = payload => ({ type: SET_DATA_TO_LOCAL_STORAGE, payload });
export const setIsShowResultsStore = payload => ({ type: SET_IS_SHOW_RESULTS_STORE, payload });
export const setQuestionsListStore = payload => ({ type: SET_QUESTIONS_LIST_STORE, payload });
export const clearUsersResultsStore = payload => ({ type: CLEAR_USERS_RESULTS_STORE, payload });
export const setQuestionsDocIdStore = payload => ({ type: SET_QUESTIONS_DOC_ID_STORE, payload });
export const setCurrentQuestionStore = payload => ({ type: SET_CURRENT_QUESTION_STORE, payload });
export const clearCurrentQuestionStore = payload => ({ type: CLEAR_CURRENT_QUESTION_STORE, payload });
export const setCorrectAnswerDocIdStore = payload => ({ type: SET_CORRECT_ANSWER_DOC_ID_STORE, payload });
export const removeItemFromLocalStorage = payload => ({ type: REMOVE_ITEM_FROM_LOCAL_STORAGE, payload });
export const getQuizDataFromLocalStorage = payload => ({ type: GET_QUIZ_DATA_FROM_LOCAL_STORAGE, payload });
export const setUserResultsResponseStore = payload => ({ type: SET_USER_RESULTS_RESPONSE_STORE, payload });
export const clearCorrectAnswerCountStore = payload => ({ type: CLEAR_CORRECT_ANSWERS_COUNT_STORE, payload });
export const setCurrentUserReadinessStore = payload => ({ type: SET_CURRENT_USER_READINESS_STORE, payload });
export const clearCurrentUserReadinessStore = payload => ({ type: CLEAR_CURRENT_USER_READINESS_STORE, payload });
export const getItemFromLocalStorageToStore = payload => ({ type: GET_ITEM_FROM_LOCAL_STORAGE_TO_STORE, payload });
export const setIsUserReadyToStartQuizStore = payload => ({ type: SET_IS_USER_READY_TO_START_QUIZ_STORE, payload });