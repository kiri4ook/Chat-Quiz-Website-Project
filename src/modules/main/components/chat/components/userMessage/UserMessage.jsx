import React from 'react';
import { Avatar } from 'antd';
import './style.scss';
import { auth } from '../../../../../../firebase/firebaseConfig';

function UserMessage({ displayName, text, photoURL, message }) {
    const user = auth.currentUser;

    return (
        <div className='user-message-container'>
            <div className={`${message.uid === user?.uid ? 'user-message' : 'self-message'}`}>
                <Avatar size={64} src={photoURL} />
                <div>{displayName}</div>
                <div className='message-text'>{text}</div>
            </div>
        </div >
    );
}

export default UserMessage;

