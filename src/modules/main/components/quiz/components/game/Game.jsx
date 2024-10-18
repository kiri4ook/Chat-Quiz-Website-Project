import React, { useState, useEffect } from 'react';
import './styles.scss';
import correctAnswerImage from '../../../../../../images/correct-answer-image.svg.png';
import notCorrectAnswerImage from '../../../../../../images/not-correct-answer-image.png';
import { connect } from 'react-redux';
import * as actions from '../../../../../../store/actions/quizAction';
import * as selectors from '../../../../Main';

const Game = ({
    text,
    answers,
    correctAnswer,
    answerResultList,
    setAnswersListStore,
    setCorrectAnswersCountStore,
}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setIsDisabled(false);
    }, [text, answers, correctAnswer]);

    const handleClick = answer => {
        const isCorrectAnswer = answer === correctAnswer;

        setIsDisabled(true);
        setAnswersListStore(isCorrectAnswer);
        isCorrectAnswer && setCorrectAnswersCountStore();
    };
    return (
        <div className="game-wrapper">
            {answerResultList.length ? (
                <div className="answer-result-images">
                    {answerResultList.map((item, i) => (
                        item ? (
                            <div
                                key={i}
                                className="image-wrapper"
                            >
                                <img
                                    src={correctAnswerImage}
                                    alt="Correct Answer"
                                    className="image"
                                />
                            </div>
                        ) : (
                            <img
                                key={i}
                                src={notCorrectAnswerImage}
                                alt="Not Correct Answer"
                                className="image"
                            />
                        )
                    ))}
                </div>
            ) : null}
            <div className="game-window">
                <div className="question-wrapper">
                    <span className="question-text">{text}</span>
                </div>
                <div className="answer-buttons">
                    {answers?.map((answer, i) => (
                        <button
                            key={i}
                            onClick={() => handleClick(answer)}
                            className={`button ${answer !== correctAnswer ? 'wrong-answer' : ''} ${isDisabled ? 'disabled' : ''}`}
                            disabled={isDisabled}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    text: selectors.textSelector(state),
    answers: selectors.answersSelector(state),
    correctAnswer: selectors.correctAnswerSelector(state),
    answerResultList: selectors.getAnswerResultList(state),
});

const mapDispatchToProps = dispatch => ({
    setAnswersListStore: payload => dispatch(actions.setAnswersListStore(payload)),
    setCorrectAnswersCountStore: () => dispatch(actions.setCorrectAnswersCountStore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

