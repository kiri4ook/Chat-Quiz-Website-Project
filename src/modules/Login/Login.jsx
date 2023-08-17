import React from 'react';
import { auth, Firebase } from '../../firebase/firebaseConfig';
import { setUser } from '../../store/actions/userAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const provider = new Firebase.auth.GoogleAuthProvider();
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(result);
            if (result.user) {
                const userId = result.user.uid;
                const usersRef = Firebase.firestore().collection('users');
                const userData = {
                    id: userId,

                };
                const docRef = await usersRef.add(userData);
                const docId = docRef.id;
                localStorage.setItem('userId', userId);
                localStorage.setItem('docId', docId);
                console.log(userId);
                console.log(docId);
                dispatch(setUser({ id: userId, docId }));
                navigate('/main');
            }
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    return (
        <div>
            Login
            <button onClick={handleGoogleLogin}>Войти через Google</button>
        </div>
    );
}

export default Login;

