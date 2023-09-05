import { eventChannel } from 'redux-saga';
import firestore from '../../firebase/firebaseConfig';
import { getDatabase, ref } from 'firebase/database';
import * as chatActions from '../actions/chatActions';
import * as quizActions from '../actions/quizAction';


export function chatMessagesEventChannel() {
    const db = getDatabase();
    const listener = eventChannel(
        emmiter => {
            firestore.collection('messages').orderBy('createdAt')
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const messages = snapshot.docChanges().map(message => message.doc.data());

                    emmiter(chatActions.setUserMessage(messages));
                });

            firestore.collection('questions')
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const questions = snapshot.docChanges().map(question => question.doc.data());
                    const changes = snapshot.docChanges().map(change => change.type);

                    if (changes[0] === 'added') {
                        emmiter(quizActions.setQuestions(questions.length && questions[0]?.questions));
                    }
                });

            firestore.collection('usersResults')
                .onSnapshot({ includeMetadataChanges: true }, snapshot => {

                    const usersResults = snapshot.docChanges().map(question => question.doc.data());
                    const changes = snapshot.docChanges().map(change => change.type);

                    if (changes[0] === 'added') {
                        emmiter(quizActions.setUserResults(usersResults));
                    }
                });

            const listeners = [
                ref(db, 'messages'),
                ref(db, 'questions'),
                ref(db, 'usersResults'),
            ];

            return () => listeners.forEach(listener => listener.off(listener));
        }
    );

    return listener;
}

