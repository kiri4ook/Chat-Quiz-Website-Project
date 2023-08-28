import { all, call, delay, put, select, takeEvery } from 'redux-saga/effects';
import {
    // FETCH_USER_READY_TO_START_QUIZ,
    // setUserReadyToStartQuiz,
    // FETCH_QUESTIONS_REQUEST,
    // setQuestions,
    // fetchQuestionsSuccess,
    // fetchQuestionsFailure,
    // DELETE_QUESTIONS,
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
    SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE,
    SET_IS_SHOW_RESULTS,
    SET_USER_RESULTS_RESPONSE,
    SET_QUESTIONS,
    SET_IS_READY_FOR_GAME

} from '../../actions/quizAction';
import * as actions from '../../actions/quizAction';
import * as selectors from './selectors';
import * as firebaseMethods from '../../../firebase/firebaseMethods/quizMethods';
import { sendGetRequest } from '../../../api/api';
const questionsUrl = 'https://opentdb.com/api.php?amount=10&difficulty=hard';

export default function* quizSaga() {
    yield all([
        call(init),
        takeEvery(SET_QUESTIONS, startQuiz),
        takeEvery(SET_IS_READY_FOR_GAME, setIsReadyForGameRequest),
        takeEvery(SET_IS_SHOW_RESULTS, setIsShowResults),
        takeEvery(SET_USER_RESULTS_RESPONSE, setUserResultsResponse),
    ]);
}

export function* setIsShowResults({ payload }) {
    const correctAnswersCountDocId = yield select(selectors.getCorrectAnswersCountDocId);

    yield put(actions.removeItemFromLocalStorage('correctAnswersCountDocId'));
    correctAnswersCountDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: 'usersResults',
        docId: correctAnswersCountDocId,
    }));
    yield put(actions.clearUsersResultsStore());
    yield put(actions.setCorrectAnswerDocIdStore(''));
    yield put(actions.clearCorrectAnswerCountStore());
    yield put(actions.clearAnswersListStore());
    yield put(actions.setIsShowResultsStore(payload));
}

export function* setUserResultsResponse({ payload }) {
    yield put(actions.setUserResultsResponseStore(payload));
}

export function* init() {
    yield put(actions.getQuizDataFromLocalStorage());
}

export function* clearAllCurrentUserReadinessData() {
    const userReadinessDocId = yield select(selectors.getUserReadinessDocId);

    yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: 'usersReadiness',
        docId: userReadinessDocId
    });

    yield put(actions.setDataToLocalStorage({
        fieldType: 'quizData',
        data: {
            currentUserReadiness: [],
            isUserReadyToStartQuiz: false,
        }
    }));

    yield put(actions.setIsUserReadyToStartQuizStore(false));
}

export function* clearAllQuestionsData() {
    yield put(actions.clearCurrentQuestionStore());
    yield put(actions.clearQuestionsStore());

    const questionsDocId = yield select(selectors.getQuestionsDocId);

    questionsDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: 'questions',
        docId: questionsDocId
    }));
}

export function* setIsReadyForGameRequest() {
    const isUserReadyForGame = yield select(selectors.getIsReadyForGame);

    yield put(actions.getItemFromLocalStorageToStore('correctAnswersCountDocId'));
    yield put(actions.clearUsersResultsStore());

    const correctAnswersCountDocId = yield select(selectors.getCorrectAnswersCountDocId);

    yield put(actions.removeItemFromLocalStorage('correctAnswersCountDocId'));
    correctAnswersCountDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: 'usersResults',
        docId: correctAnswersCountDocId,
    }));

    if (!isUserReadyForGame) {
        const response = yield call(firebaseMethods.sendAddUserReadinessRequest);

        yield put(actions.setCurrentUserReadinessStore(response));
        yield put(actions.setIsUserReadyToStartQuizStore(true));
        yield put(actions.setDataToLocalStorage({
            fieldType: 'quizData',
            data: {
                isUserReadyToStartQuiz: true,
                currentUserReadiness: response,
            }
        }));

        const isUsersReadyToStartQuiz = yield call(firebaseMethods.checkIsUsersReadyToStartQuiz);

        isUsersReadyToStartQuiz && (yield call(initializeBeforeStartQuiz));

        return;
    }

    yield call(clearAllCurrentUserReadinessData);
}

export function* initializeBeforeStartQuiz() {
    try {
        const data = yield call(sendGetRequest, questionsUrl)
        const { results: questions } = data;
        const questionsDocId = yield call(firebaseMethods.sendAddUserReadinessRequest, questions);

        yield put(actions.setQuestionsDocIdStore(questionsDocId));
    } catch (error) {
        console.error('error', error);
    }
}

export function* finishQuizAndSetResults() {
    yield call(clearAllCurrentUserReadinessData);
    yield put(actions.setIsShowResultsStore(true));
    yield call(clearAllQuestionsData);

    const correctAnswersCount = yield select(selectors.getCorrectAnswersCount);
    const correctAnswersCountDocId = yield call(firebaseMethods.sendAddUserResultsRequest, correctAnswersCount);

    if (correctAnswersCountDocId) {
        yield put(actions.setDataToLocalStorage({
            fieldType: 'correctAnswersCountDocId',
            data: correctAnswersCountDocId,
        }));
    }

    yield put(actions.setCorrectAnswerDocIdStore(correctAnswersCountDocId));
}

export function* startQuiz({ payload: questionsList }) {
    if (!questionsList) {
        return;
    }

    yield put(actions.setQuestionsListStore(questionsList));

    const questions = yield select(selectors.getQuestionsList);

    for (let question of questions) {
        yield put(actions.setCurrentQuestionStore(question));

        yield delay(10000);
    }

    yield call(finishQuizAndSetResults);
}
