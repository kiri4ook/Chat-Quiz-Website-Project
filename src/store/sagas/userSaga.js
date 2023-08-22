import { call, put, takeEvery } from 'redux-saga/effects';
import { setUser, fetchUserFailure, fetchUserSuccess, FETCH_USER_REQUEST } from '../actions/userAction';
import { fetchUserFromFirebase } from '../../firebase/firebaseMethods';

function* fetchUser(action) {
    try {
        const docId = action.payload;
        console.log(docId);
        const user = yield call(fetchUserFromFirebase, docId);
        yield put(fetchUserSuccess(user));
        yield put(setUser(user));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

function* userSaga() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}

export default userSaga;

