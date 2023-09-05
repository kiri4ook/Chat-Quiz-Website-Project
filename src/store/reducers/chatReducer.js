import * as actions from "../actions/chatActions";

const initialState = {
    messages: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USERS_MESSAGES_STORE:
            return {
                ...state,
                messages: [...state.messages, ...action.payload],
            };
        default:
            return state;
    }
};

export default chatReducer;

