import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import chatSaga from './chatSaga'

function* rootSaga() {
    yield all([
        userSaga(),
        chatSaga(),
    ]);
}

export default rootSaga;

