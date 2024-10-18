import { all, put, call, fork, take, takeEvery } from 'redux-saga/effects';
import * as eventChannels from './eventChannels';
import * as chatMethods from '../../firebase/firebaseMethods/chatMethods'
import * as actions from '../actions/chatActions';

const setUsersMessagesStore = payload => ({ type: actions.SET_USERS_MESSAGES_STORE, payload });


export default function* chatSaga() {
    yield all([
        fork(startListener),
        takeEvery(actions.SEND_MESSAGE, sendMessages),
        takeEvery(actions.SET_USER_MESSAGE, setUserMessages)
    ]);
};

export function* sendMessages({ payload }) {
    yield call(chatMethods.sendMessageRequest, payload);
}

export function* setUserMessages({ payload }) {
    if (payload.length) {
        const filteredMessagesList = payload.filter(message => message.createdAt);

        filteredMessagesList.length && (yield put(setUsersMessagesStore(filteredMessagesList)));
    }
}

export function* startListener() {
    const chatMessagesChannel = eventChannels.chatMessagesEventChannel();

    while (true) {
        const eventAction = yield take(chatMessagesChannel);

        yield put(eventAction);
    }
}
