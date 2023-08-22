import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchMessagesSuccess, fetchMessagesFailure, FETCH_MESSAGES_REQUEST } from '../actions/chatActions';
import { sendMessageRequest } from '../../firebase/firebaseMethods';

function* sendMessage() {
    try {
        const response = yield call(sendMessageRequest);
        console.log(response)
        yield put(fetchMessagesSuccess(response));
    } catch (error) {
        console.error(error)
        yield put(fetchMessagesFailure(error.message));
    }
}

function* messageSaga() {
    yield takeEvery(FETCH_MESSAGES_REQUEST, sendMessage);
}

export default messageSaga;

