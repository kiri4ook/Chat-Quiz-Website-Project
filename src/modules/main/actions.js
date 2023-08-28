import {
    SET_IS_SHOW_RESULTS,
    SET_IS_READY_FOR_GAME,
    SET_ANSWERS_LIST_STORE,
    SET_CORRECT_ANSWERS_COUNT_STORE,
    SEND_MESSAGE
} from '../../store/actions/quizAction';

export const sendMessage = payload => ({ type: SEND_MESSAGE, payload });
export const setIsShowResults = payload => ({ type: SET_IS_SHOW_RESULTS, payload });
export const setIsReadyForGame = payload => ({ type: SET_IS_READY_FOR_GAME, payload });
export const setAnswersListStore = payload => ({ type: SET_ANSWERS_LIST_STORE, payload });
export const setCorrectAnswersCountStore = payload => ({ type: SET_CORRECT_ANSWERS_COUNT_STORE, payload });