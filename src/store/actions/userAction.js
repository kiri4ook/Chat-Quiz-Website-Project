export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_IN_WITH_GOOGLE = 'SIGN_IN_WITH_GOOGLE';
export const SET_AUTH_USER_STORE = 'SET_AUTH_USER_STORE';
export const SET_DATA_TO_LOCAL_STORAGE = 'SET_DATA_TO_LOCAL_STORAGE';
export const REMOVE_DATA_FROM_LOCAL_STORAGE = 'REMOVE_DATA_FROM_LOCAL_STORAGE';
export const SET_AUTH_USER_DATABASE_ID_STORE = 'SET_AUTH_USER_DATABASE_ID_STORE';
export const SET_USER_DATA_FROM_LOCAL_STORAGE_STORE = 'SET_USER_DATA_FROM_LOCAL_STORAGE_STORE';

export const signOut = (payload) => ({
    type: SIGN_OUT,
    payload,
})
export const signInWithGoogle = (payload) => ({
    type: SIGN_IN_WITH_GOOGLE,
    payload,
})
export const setAuthUserStore = payload => ({
    type: SET_AUTH_USER_STORE,
    payload
});
export const setDataToLocalStorage = payload => ({
    type: SET_DATA_TO_LOCAL_STORAGE,
    payload
});
export const removeDataFromLocalStorage = payload => ({
    type: REMOVE_DATA_FROM_LOCAL_STORAGE,
    payload
});
export const setAuthUserDatabaseIdStore = payload => ({
    type: SET_AUTH_USER_DATABASE_ID_STORE,
    payload
});
export const setUserDataFromLocalStoregeStore = payload => ({
    type: SET_USER_DATA_FROM_LOCAL_STORAGE_STORE,
    payload
});
