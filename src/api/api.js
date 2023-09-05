export const sendGetRequest = async url => {
    return await fetch(url).then(response => response.json());
};

export const questionsUrl = 'https://opentdb.com/api.php?amount=10&difficulty=hard';