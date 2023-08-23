import { put, select, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USER_READY_TO_START_QUIZ, setUserReadyToStartQuiz } from '../actions/quizAction';
import { addQuizDataToFirestore, deleteQuizDataFromFirestore } from '../../firebase/firebaseMethods';

function* setIsUserReadyToStartQuiz() {
    const isUserReady = yield select(state => state.quizState.isUserReadyToStartQuiz);
    if (!isUserReady) {
        yield put(setUserReadyToStartQuiz(true));

        const userId = yield select(state => state.userState.user.id);
        const docId = yield call(addQuizDataToFirestore, userId);
        const quizData = {
            docId: docId,
            userId: userId,
            isUserReadyToStartQuiz: true,
        };
        localStorage.setItem('quizData', JSON.stringify(quizData));
    } else {
        yield put(setUserReadyToStartQuiz(false));

        const lsQuizData = JSON.parse(localStorage.getItem('quizData'));
        const docId = lsQuizData.docId;
        yield call(deleteQuizDataFromFirestore, docId);

        const quizData = {
            docId: null,
            userId: null,
            isUserReadyToStartQuiz: false,
        };
        localStorage.setItem('quizData', JSON.stringify(quizData));
    }
}

function* quizSaga() {
    yield takeEvery(FETCH_USER_READY_TO_START_QUIZ, setIsUserReadyToStartQuiz);
}

export default quizSaga;

