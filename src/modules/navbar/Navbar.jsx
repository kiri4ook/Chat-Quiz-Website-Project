import React from 'react';
import { useDispatch } from 'react-redux';
import { Firebase } from '../../firebase/firebaseConfig';
import { clearUser } from '../../store/actions/userAction';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const docId = localStorage.getItem('docId');

        if (docId) {
            const usersRef = Firebase.firestore().collection('users');
            await usersRef.doc(docId).delete();
        }

        localStorage.removeItem('userId');
        localStorage.removeItem('docId');
        dispatch(clearUser());

        navigate('/');
    };

    return (
        <button onClick={handleLogout}>Выход</button>
    );
}

export default Navbar;