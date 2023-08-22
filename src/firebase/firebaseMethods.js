import { Firebase } from "./firebaseConfig";
import firestore from "./firebaseConfig";

export const fetchUserFromFirebase = async (docId) => {
    try {
        const userDocRef = firestore.collection('users').doc(docId);
        const userDoc = await userDocRef.get();
        if (userDoc.exists) {
            console.log(userDoc + 'true');
            const user = userDoc.data();
            return user;
        } else {
            console.log(userDoc + 'false');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user from Firebase:', error);
        throw error;
    }
};

export const sendMessageRequest = async () => {
    try {
        const messagesRef = firestore.collection('messages');
        const querySnapshot = await messagesRef.get();
        console.log(querySnapshot + 'true');
        const messagesData = [];
        querySnapshot.forEach((doc) => {
            messagesData.push(doc.data());
        });
        console.log(messagesData + 'true');

        return messagesData;
    } catch (error) {
        console.error('Error sending message request:', error);
        throw error;
    }
};

