import React, { useEffect, useRef, useLayoutEffect } from 'react';
import UserMessage from './components/userMessage/UserMessage';
import TextField from './components/textField/TextField';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/chatActions';
import * as selectors from '../../Main';
import './styles.scss';

const Chat = ({
    userId,
    messages,
    sendMessage,
}) => {
    const messageEl = useRef(null);

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, []);
    useLayoutEffect(() => {
        const target = messageEl.current;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="messages-wrapper" ref={messageEl}>
                {messages?.map(message => (
                    <UserMessage
                        key={message.createdAt}
                        userId={userId}
                        message={message}
                    />
                ))}
            </div>
            <TextField type={'text'} sendMessage={sendMessage} />
        </div>
    );
};

const mapStateToProps = state => ({
    userId: selectors.getUserId(state),
    messages: selectors.getMessages(state),
});

const mapDispatchToProps = dispatch => ({
    sendMessage: payload => dispatch(actions.sendMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);