const initialState = {
    messages: [],
    loading: false,
    error: null,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case 'FETCH_MESSAGES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_MESSAGES_SUCCESS':
            return {
                ...state,
                loading: false,
                messages: action.payload,
            };
        case 'FETCH_MESSAGES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default chatReducer;

