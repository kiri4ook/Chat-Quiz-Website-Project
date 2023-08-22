export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const setUser = (payload) => ({
    type: SET_USER,
    payload,
})
export const clearUser = (payload) => ({
    type: CLEAR_USER,
    payload,
})
export const fetchUserRequest = (docId) => ({
    type: FETCH_USER_REQUEST,
    payload: docId,
})
export const fetchUserSuccess = (payload) => ({
    type: FETCH_USER_SUCCESS,
    payload,
})
export const fetchUserFailure = (payload) => ({
    type: FETCH_USER_FAILURE,
    payload,
})

