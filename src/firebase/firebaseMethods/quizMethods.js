import firestore, { auth } from "../firebaseConfig";

export const addQuestionsToFirestore = async (questions) => {
    let questionsDocId = '';
    try {
        const questionsRef = firestore.collection('questions');
        const query = await questionsRef.get();
        if (query.docs.length === 0) {
            await questionsRef.add({ questions: questions })
                .then(docRef => questionsDocId = docRef.id);
        }

        return questionsDocId;

    } catch (error) {
        console.error('Error adding questions to Firestore:', error);
        throw error;
    }
};

export const sendAddUserReadinessRequest = async () => {
    const user = auth.currentUser;

    let userReadinessDocId = '';

    const fireBaseRef = firestore.collection('usersReadiness');
    const query = await fireBaseRef
        .where('uid', '==', user.uid)
        .get();
    if (query.docs.length === 0) {
        await firestore.collection('usersReadiness').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
            .then(docRef => userReadinessDocId = docRef.id);
    }
    return { uid: user.uid, userReadinessDocId };
};

export const sendAddUserResultsRequest = async correctAnswersCount => {
    const user = auth.currentUser;
    const {
        uid,
        photoURL,
        displayName,
    } = user;

    let correctAnswersCountDocId = '';

    const fireBaseRef = firestore.collection('usersResults');
    const query = await fireBaseRef
        .where('uid', '==', uid)
        .get();
    if (query.docs.length === 0) {
        await firestore.collection('usersResults').add({
            uid,
            displayName,
            photoURL,
            correctAnswersCount,
        })
            .then(docRef => correctAnswersCountDocId = docRef.id);
    }

    return correctAnswersCountDocId;
};

export const checkIsUsersReadyToStartQuiz = async () => {
    const firebaseUsersRef = firestore.collection('users');
    const firebaseUsersReadinessRef = firestore.collection('usersReadiness');

    try {
        const userQuery = await firebaseUsersRef.get();
        const userReadinessQuery = await firebaseUsersReadinessRef.get();

        return (userQuery.docs.length && userQuery.docs.length === userReadinessQuery.docs.length);
    } catch (error) {
        console.error('error', error);
    }
};

export const deleteFromCollectionByDocIdRequest = async ({ type, docId }) => {
    const fireBaseUserRef = firestore.collection(type);

    await fireBaseUserRef.doc(docId).delete();
};

