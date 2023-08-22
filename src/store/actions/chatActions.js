export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const addMessage = (updatedMessages) => ({
    type: UPDATE_MESSAGE,
    payload: updatedMessages,
})

export const fetchMessagesRequest = (messageId) => ({
    type: FETCH_MESSAGES_REQUEST,
    payload: messageId,
})

export const fetchMessagesSuccess = (messageData) => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: messageData,
})

export const fetchMessagesFailure = (error) => ({
    type: FETCH_MESSAGES_FAILURE,
    error: error,
})

