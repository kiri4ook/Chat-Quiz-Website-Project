import React from 'react';
import './styles.scss';

const UserMessage = ({
    userId,
    message,
}) => {
    const isSelfMessage = userId === message.uid;
    return (
        <div
            className={`user-message-wrapper ${isSelfMessage ? 'self-message' : ''}`}
        >
            <div className="message-info">
                <img
                    src={message.photoURL}
                    alt="User_photo"
                    className="user-photo"
                />
                <div className="message-name">
                    <span className="name">{message.displayName}</span>
                </div>
            </div>
            <div className="message-container">
                <span className="message-text">{message.text}</span>
            </div>
        </div>
    );
};

export default UserMessage;

