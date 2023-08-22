import React, { useEffect, useRef } from 'react';
import { Layout, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import CustomTextField from './components/customTextField/CustomTextField';
import UserMessage from './components/userMessage/UserMessage';
import { fetchMessagesRequest, UPDATE_MESSAGE } from '../../../../store/actions/chatActions';
import firestore, { auth } from '../../../../firebase/firebaseConfig';

const { Content } = Layout;

function Chat() {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chatState.messages);
    const messagesContainerRef = useRef(null);
    const sortedMessages = [...messages].sort((a, b) => a.createdAt - b.createdAt);
    const user = auth.currentUser;


    useEffect(() => {
        dispatch(fetchMessagesRequest());
    }, []);

    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [sortedMessages]);

    useEffect(() => {
        const unsubscribe = firestore.collection('messages')
            .orderBy('createdAt')
            .onSnapshot(snapshot => {
                const updatedMessages = snapshot.docs.map(doc => doc.data());
                dispatch({ type: UPDATE_MESSAGE, payload: updatedMessages });
            });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Space className='Space' direction="vertical" size={[0, 48]}>
            <Layout>
                <Content className='layout-content'>
                    <div className='message-window' ref={messagesContainerRef}>
                        {sortedMessages.map((message, index) => (
                            <div className={`${message.uid === user?.uid ? '' : 'self-message'}`}>
                                <UserMessage
                                    key={index}
                                    displayName={message.displayName}
                                    text={message.text}
                                    photoURL={message.photoUrl}
                                    message={message}
                                />
                            </div>
                        ))}
                    </div>
                    <CustomTextField />
                </Content>
            </Layout>
        </Space>
    );
}

export default Chat;

