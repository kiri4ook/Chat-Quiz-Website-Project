import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { SIGN_IN_WITH_GOOGLE } from '../../store/actions/userAction';

function Login({
    signInWithGoogle,
}) {
    return (
        <div className='login-wrapper'>
            <button className='login-btn' onClick={signInWithGoogle}>Login with Google</button>
        </div>
    );
}
const signInWithGoogle = () => ({ type: SIGN_IN_WITH_GOOGLE });

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(signInWithGoogle()),
});

export default connect(null, mapDispatchToProps)(Login);


