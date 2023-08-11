export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const addMessage = (payload) => ({
    type: ADD_MESSAGE,
    payload,
})

export const fetchMessagesRequest = (payload) => ({
    type: FETCH_MESSAGES_REQUEST,
    payload,
})

export const fetchMessagesSuccess = (payload) => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload,
})

export const fetchMessagesFailure = (payload) => ({
    type: FETCH_MESSAGES_FAILURE,
    payload,
})

