import firestore, { auth, Firebase } from "../firebaseConfig";

export const sendMessageRequest = async (value) => {
    const user = auth.currentUser;
    try {
        await firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
        console.error('Error sending message request:', error);
        throw error;
    }
};
