import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import chatSaga from './chatSaga'
import quizSaga from './quizSaga/quizSaga';

function* rootSaga() {
    yield all([
        userSaga(),
        chatSaga(),
        quizSaga(),
    ]);
}

export default rootSaga;

