import axios from 'axios';

const API_BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuestionsFromApi = async (amount = 10) => {
    try {
        const response = await axios.get(API_BASE_URL, {
            params: {
                amount,
            },
        });

        return response.data.results;
    } catch (error) {
        console.error('Error fetching questions from API:', error);
        throw error;
    }
};

export const sendGetRequest = async url => {
    return await fetch(url).then(response => response.json());
};
