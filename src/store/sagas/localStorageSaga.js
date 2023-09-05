import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import * as quizActions from '../actions/quizAction';
import * as userActions from '../actions/userAction';

const getUserState = state => state.userState;

export default function* localStorageSaga() {
    yield all([
        call(getUserDataFromLocalStorage),
        takeEvery(quizActions.SET_DATA_TO_LOCAL_STORAGE, setDataToLocalStorage),
        takeEvery(userActions.REMOVE_DATA_FROM_LOCAL_STORAGE, removeDataFromLocalStorage),
        takeEvery(quizActions.REMOVE_ITEM_FROM_LOCAL_STORAGE, removeItemFromLocalStorage),
        takeEvery(quizActions.GET_QUIZ_DATA_FROM_LOCAL_STORAGE, getQuizDataFromLocalStorage),
        takeEvery(quizActions.GET_ITEM_FROM_LOCAL_STORAGE_TO_STORE, getItemFromLocalStorageToStore),
    ]);
};

export function* getItemFromLocalStorageToStore({ payload }) {
    if (!payload) {
        return false;
    }

    const itemFromLocalStorage = yield call([localStorage, 'getItem'], payload);

    if (!itemFromLocalStorage) {
        return;
    }

    const parsedItemFromLocalStorage = yield call([JSON, 'parse'], itemFromLocalStorage);

    yield put(quizActions.setCorrectAnswerDocIdStore(parsedItemFromLocalStorage));
}

export function* getUserDataFromLocalStorage() {
    const { uid, docId } = yield select(getUserState);

    if (uid || docId) {
        return false;
    }

    const userLocalStorageData = yield call([localStorage, 'getItem'], 'authData');

    if (!userLocalStorageData) {
        return;
    }

    const parsedUserLocalStorageData = yield call([JSON, 'parse'], userLocalStorageData);

    yield put(userActions.setUserDataFromLocalStoregeStore({
        userId: parsedUserLocalStorageData.uid,
        userDocId: parsedUserLocalStorageData.docId,
    }));
}

export function* getQuizDataFromLocalStorage() {
    const { uid, docId } = yield select(getUserState);

    if (uid || docId) {
        return false;
    }

    const quizLocalStorageData = yield call([localStorage, 'getItem'], 'quizData');

    if (!quizLocalStorageData) {
        return;
    }

    const parsedQuizLocalStorageData = yield call([JSON, 'parse'], quizLocalStorageData);

    yield put(quizActions.setQuizDataFromLocalstorageStore({
        currentUserReadiness: [parsedQuizLocalStorageData.currentUserReadiness],
        isUserReadyToStartQuiz: parsedQuizLocalStorageData.isUserReadyToStartQuiz,
    }));
}

export function* setDataToLocalStorage(action) {
    const {
        data,
        fieldType,
    } = action.payload;

    yield call([localStorage, 'setItem'], fieldType, JSON.stringify(data));
}

export function* removeDataFromLocalStorage() {
    yield call([localStorage, 'clear']);
}

export function* removeItemFromLocalStorage({ payload }) {
    yield call([localStorage, 'removeItem'], payload);
}
