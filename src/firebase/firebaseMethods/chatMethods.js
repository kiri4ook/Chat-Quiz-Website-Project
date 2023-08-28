import firestore from "../firebaseConfig";

export const sendMessageRequest = async () => {
    try {
        const messagesRef = firestore.collection('messages');
        const querySnapshot = await messagesRef.get();
        const messagesData = [];
        querySnapshot.forEach((doc) => {
            messagesData.push(doc.data());
        });

        return messagesData;
    } catch (error) {
        console.error('Error sending message request:', error);
        throw error;
    }
};
