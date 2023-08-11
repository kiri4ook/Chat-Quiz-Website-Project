const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    loading: false,
    error: null,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return {
                ...state,
                questions: action.payload,
            };
        case 'ANSWER_QUESTION':
            const { questionIndex, selectedOption } = action.payload;
            const updatedQuestions = [...state.questions];
            updatedQuestions[questionIndex].userAnswer = selectedOption;

            return {
                ...state,
                questions: updatedQuestions,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                score: selectedOption.isCorrect ? state.score + 1 : state.score,
            };
        case 'FETCH_QUESTIONS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_QUESTIONS_SUCCESS':
            return {
                ...state,
                loading: false,
                questions: action.payload,
            };
        case 'FETCH_QUESTIONS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default quizReducer;

