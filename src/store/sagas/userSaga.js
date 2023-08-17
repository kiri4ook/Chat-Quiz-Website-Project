import { call, put, takeEvery } from 'redux-saga/effects';
import firestore from '../../firebase/firebaseConfig';
import { setUser, fetchUserFailure, FETCH_USER_REQUEST } from '../actions/userAction';

const fetchUserFromFirebase = async (userId) => {
    try {
        const userDocRef = firestore.collection('users').doc(userId);
        const userDoc = await userDocRef.get();

        if (userDoc.exists) {
            const user = userDoc.data();
            return user;
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
};

function* fetchUser(action) {
    try {
        const userId = action.payload.userId;
        console.log('Fetching user with ID:', userId);
        const user = yield call(fetchUserFromFirebase, userId);
        yield put(setUser(user));
    } catch (error) {
        console.error('Error fetching user:', error);
        yield put(fetchUserFailure(error.message));
    }
}

function* userSaga() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser);
}

export default userSaga;

