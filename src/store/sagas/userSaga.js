import { takeEvery, select, call, put } from 'redux-saga/effects';
import * as actions from './../actions/userAction';
import * as firebaseAuthMethods from '../../firebase/firebaseMethods/userMethods';
import * as firebaseQuizMethods from '../../firebase/firebaseMethods/quizMethods';

const getDocId = state => state.userState.userDocId;
const getUserId = state => state.userState.userId;
const getUserReadinessDocId = state => state.quizState.currentUserReadiness[0]?.userReadinessDocId;

export default function* firebaseAuthSaga() {
    yield takeEvery(actions.SIGN_OUT, singOut);
    yield takeEvery(actions.SIGN_IN_WITH_GOOGLE, singIn);
}

export function* singIn() {
    const userId = yield select(getUserId);

    if (!!userId) {
        return
    }

    try {
        const { uid, docId } = yield call(firebaseAuthMethods.getFirebaseSignInRequest);

        yield put(actions.setAuthUserStore(uid));
        yield put(actions.setAuthUserDatabaseIdStore(docId));
        yield put(actions.setDataToLocalStorage({ fieldType: 'authData', data: { uid, docId } }));
    } catch (error) {
        console.error('error', error)
    }
}

export function* singOut() {
    const docId = yield select(getDocId);
    const userReadinessDocId = yield select(getUserReadinessDocId);

    userReadinessDocId && (yield call(firebaseQuizMethods.deleteFromCollectionByDocIdRequest, {
        type: 'usersReadiness',
        docId: userReadinessDocId,
    }));

    try {
        yield call(firebaseAuthMethods.firebaseSignOut, docId);
        yield put(actions.setAuthUserStore(''));
        yield put(actions.removeDataFromLocalStorage());
    } catch (error) {
        console.error('error', error)
    }
}

