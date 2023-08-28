import React from 'react';
import Quiz from './components/quiz/Quiz';
import Chat from './components/chat/Chat';
import './style.scss';

function Main() {
    return (
        <div className='chat-quiz-wrapper'>
            <Quiz />
            <Chat />
        </div>
    );
}

export default Main;

