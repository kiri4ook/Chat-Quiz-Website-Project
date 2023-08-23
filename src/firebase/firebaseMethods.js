import { Firebase } from "./firebaseConfig";
import firestore from "./firebaseConfig";

export const fetchUserFromFirebase = async (docId) => {
    try {
        const userDocRef = firestore.collection('users').doc(docId);
        const userDoc = await userDocRef.get();
        if (userDoc.exists) {
            const user = userDoc.data();
            return user;
        } else {
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

export const addQuizDataToFirestore = async (userId) => {
    const userRef = firestore.collection('userReadiness');
    const docRef = await userRef.add({ userId, ready: true });
    return docRef.id;
}

export const deleteQuizDataFromFirestore = async (docId) => {
    try {
        const userRef = firestore.collection('userReadiness').doc(docId);
        await userRef.delete();
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

