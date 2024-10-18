import * as actions from "../actions/userAction";

const initialState = {
    userId: '',
    userDocId: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_AUTH_USER_STORE:
            return {
                ...state,
                userId: action.payload,
            };
        case actions.SET_AUTH_USER_DATABASE_ID_STORE:
            return {
                ...state,
                userDocId: action.payload,
            };
        case actions.SET_USER_DATA_FROM_LOCAL_STORAGE_STORE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;

