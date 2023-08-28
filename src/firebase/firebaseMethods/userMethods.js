import firestore from "../firebaseConfig";

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
