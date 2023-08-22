import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMessagesRequest, addMessage } from '../../../../../../store/actions/chatActions';
import { Input, Button } from 'antd';
import firestore from '../../../../../../firebase/firebaseConfig';
import { auth } from '../../../../../../firebase/firebaseConfig';

function CustomTextField() {
    const user = auth.currentUser;
    const dispatch = useDispatch();

    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        if (user) {
            const messageData = {
                uid: user.uid,
                displayName: user.displayName,
                photoUrl: user.photoURL,
                text: message,
                createdAt: new Date(),
            };

            firestore.collection('messages').add(messageData);
            dispatch(addMessage(messageData));
            dispatch(fetchMessagesRequest());
            setMessage('');
        }
    };

    return (
        <div className='text-field-wrapper'>
            <Input placeholder="Enter message..." type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={handleSendMessage}>SEND</Button>
        </div>
    );
}

export default CustomTextField;

