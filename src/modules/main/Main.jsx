import React from 'react';
import Quiz from './components/quiz/Quiz';
import Chat from './components/chat/Chat';

function Main() {
    return (
        <div>
            <h1>Main Component</h1>
            <Quiz />
            <Chat />
        </div>
    );
}

export default Main;