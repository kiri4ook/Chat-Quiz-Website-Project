import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/quizAction';
import * as selectors from '../../Main';
import Game from './components/game/Game';
import Results from './components/results/Results';
import ReadyForGame from './components/readyForQuiz/ReadyForQuiz';
import './style.scss';

const Quiz = ({
    isShowResults,
    isQuizInProcess,
    setIsReadyForGame,
    isUserReadyToStartQuiz,
}) => {
    return (
        <div className='quiz-wrapper'>
            {isQuizInProcess ?
                !isShowResults ?
                    <Game />
                    :
                    <Results />
                :
                <ReadyForGame
                    callback={setIsReadyForGame}
                    isUserReadyToStartQuiz={isUserReadyToStartQuiz}
                />
            }
        </div>
    );
};

const mapStateToProps = state => ({
    isShowResults: selectors.getIsShowResults(state),
    isQuizInProcess: selectors.isQuizInProcess(state),
    isUserReadyToStartQuiz: selectors.getIsUserReadyToStartQuiz(state),
});

const mapDispatchToProps = dispatch => ({
    setIsReadyForGame: payload => dispatch(actions.setIsReadyForGame(payload)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

