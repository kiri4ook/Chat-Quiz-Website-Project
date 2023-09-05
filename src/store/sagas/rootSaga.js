import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import chatSaga from './chatSaga'
import quizSaga from './quizSaga';
import localStorageSaga from './localStorageSaga';


function* rootSaga() {
    yield all([
        userSaga(),
        chatSaga(),
        quizSaga(),
        localStorageSaga(),

    ]);
}

export default rootSaga;

