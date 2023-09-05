export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_USERS_MESSAGES_STORE = 'SET_USERS_MESSAGES_STORE';
export const SET_USER_MESSAGE = 'SET_USER_MESSAGE';


export const sendMessage = payload => ({
    type: SEND_MESSAGE,
    payload,
})
export const setUsersMessagesStore = payload => ({
    type: SET_USERS_MESSAGES_STORE,
    payload,
})
export const setUserMessage = payload => ({
    type: SET_USER_MESSAGE,
    payload,
})