import firestore, { Firebase, auth } from "../firebaseConfig";

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
export const getFirebaseSignInRequest = async () => {
    try {
        let docId = '';
        const provider = new Firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        const usersRef = Firebase.firestore().collection('users');
        const query = await usersRef
            .where('uid', '==', user.uid)
            .get();
        if (query.docs.length === 0) {
            await usersRef.add({
                uid: user.uid,
                name: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
            })
                .then(docRef => docId = docRef.id);
        }

        return { uid: user.uid, docId }
    } catch (error) {
        console.error('Google Login Error:', error);
    }
};


export const firebaseSignOut = async docId => {
    if (docId) {
        const fireBaseUserRef = firestore.collection('users');

        await fireBaseUserRef.doc(docId).delete();
    }

    await auth.signOut();
};