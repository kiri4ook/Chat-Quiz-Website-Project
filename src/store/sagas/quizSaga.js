import { all, call, delay, put, select, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/quizAction';
import * as firebaseMethods from '../../firebase/firebaseMethods/quizMethods';
import { sendGetRequest, questionsUrl } from '../../api/api';

const getQuestionsList = state => state.quizState.questionsList;
const getQuestionsDocId = state => state.quizState.questionsDocId;
const getIsReadyForGame = state => state.quizState.isUserReadyToStartQuiz;
const getUserReadinessDocId = state => state.quizState.currentUserReadiness[0].userReadinessDocId;
const getCorrectAnswersCount = state => state.quizState.correctAnswersCount;
const getCorrectAnswersCountDocId = state => state.quizState.correctAnswersCountDocId;

export default function* quizSaga() {
    yield all([
        call(init),
        takeEvery(actions.SET_QUESTIONS, startQuiz),
        takeEvery(actions.SET_IS_READY_FOR_GAME, setIsReadyForGameRequest),
        takeEvery(actions.SET_IS_SHOW_RESULTS, setIsShowResults),
        takeEvery(actions.SET_USER_RESULTS_RESPONSE, setUserResultsResponse),
    ]);
}

export function* startQuiz({ payload: questionsList }) {
    if (!questionsList) {
        return;
    }

    yield put(actions.setQuestionsListStore(questionsList));

    const questions = yield select(getQuestionsList);

    for (let question of questions) {
        yield put(actions.setCurrentQuestionStore(question));

        yield delay(10000);
    }
    yield call(finishQuizAndSetResults);
}

export function* setIsReadyForGameRequest() {
    const isUserReadyForGame = yield select(getIsReadyForGame);

    yield put(actions.getItemFromLocalStorageToStore('correctAnswersCountDocId'));
    yield put(actions.clearUsersResultsStore());

    const correctAnswersCountDocId = yield select(getCorrectAnswersCountDocId);

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

export function* setIsShowResults({ payload }) {
    const correctAnswersCountDocId = yield select(getCorrectAnswersCountDocId);

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
    const userReadinessDocId = yield select(getUserReadinessDocId);

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

    const questionsDocId = yield select(getQuestionsDocId);

    questionsDocId && (yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: 'questions',
        docId: questionsDocId
    }));
}

export function* initializeBeforeStartQuiz() {
    try {
        const data = yield call(sendGetRequest, questionsUrl)
        const { results: questions } = data;
        const questionsDocId = yield call(firebaseMethods.addQuestionsToFirestore, questions);

        yield put(actions.setQuestionsDocIdStore(questionsDocId));
    } catch (error) {
        console.error('error', error);
    }
}

export function* finishQuizAndSetResults() {
    yield call(clearAllCurrentUserReadinessData);
    yield put(actions.setIsShowResultsStore(true));
    yield call(clearAllQuestionsData);

    const correctAnswersCount = yield select(getCorrectAnswersCount);
    const correctAnswersCountDocId = yield call(firebaseMethods.sendAddUserResultsRequest, correctAnswersCount);

    if (correctAnswersCountDocId) {
        yield put(actions.setDataToLocalStorage({
            fieldType: 'correctAnswersCountDocId',
            data: correctAnswersCountDocId,
        }));
    }

    yield put(actions.setCorrectAnswerDocIdStore(correctAnswersCountDocId));
}

