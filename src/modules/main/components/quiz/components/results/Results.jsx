import React from 'react';
import UserScores from './components/userScores/UserScores';
import { connect } from 'react-redux';
import * as actions from '../../../../../../store/actions/quizAction';
import * as selectors from '../../../../Main';
import './styles.scss';

const Results = ({
    usersResultsList,
    setIsShowResults,
}) => {
    return (
        <div className="results-wrapper">
            {usersResultsList.length ?
                <div className="scores-container">
                    <div className="scores-header">
                        <span className="user">user</span>
                        <span className="scores">scores</span>
                    </div>
                    {usersResultsList.map(item =>
                        <UserScores
                            key={item.photoURL}
                            name={item.displayName}
                            image={item.photoURL}
                            scores={item.correctAnswersCount}
                        />
                    )}
                </div>
                : null
            }
            <div className="button-wrapper">
                <button
                    onClick={() => setIsShowResults(false)}
                    className='button'
                >
                    {'ok'}
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    usersResultsList: selectors.getUsersResultsList(state),
});

const mapDispatchToProps = dispatch => ({
    setIsShowResults: payload => dispatch(actions.setIsShowResults(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);

