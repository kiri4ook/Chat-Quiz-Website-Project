import React from 'react';
import { Layout, Button } from 'antd';
import { SIGN_OUT } from '../../store/actions/userAction';
import { connect } from 'react-redux';
import './style.scss';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

function Navbar({ user, signOut }) {

    return (
        <Header className='Header'>
            {user ?
                <>
                    <div className='wrapper_buttons_nav'>
                        <Button className='Button' >
                            <NavLink to='/main' className='NavLink'>Home</NavLink>
                        </Button>
                        <Button className='Button' >
                            <NavLink to='/chat' className='NavLink'>Chat</NavLink>
                        </Button>
                        <Button className='Button'>
                            <NavLink to='/quiz' className='NavLink'>Quiz</NavLink>
                        </Button>
                    </div>

                    <Button className='Button' onClick={signOut}>LogOut</Button>
                </>

                :
                null
            }
        </Header>
    );
}

const signOut = () => ({ type: SIGN_OUT });

const getUserId = state => state.userState.userId;

const mapStateToProps = state => ({
    user: getUserId(state),
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

