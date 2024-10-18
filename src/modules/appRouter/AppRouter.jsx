import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../main/Main';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import Chat from '../main/components/chat/Chat';
import Quiz from '../main/components/quiz/Quiz';

const AppRouter = ({
    user,
}) => {
    return (
        user ?
            <Routes>
                <Route path='/main' element={<Main />} exact />
                <Route path='/chat' element={<Chat />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path="*" element={<Navigate to={'/main'} />} />
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login />} exact />
                <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
    )
};

const getUserId = state => state.userState.userId;
const mapStateToProps = state => ({
    user: getUserId(state),
});

export default connect(mapStateToProps)(AppRouter);
