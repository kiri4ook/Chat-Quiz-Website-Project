import React from 'react';
import './styles.scss';

const UserScores = ({
    name,
    image,
    scores,
}) => {
    return (
        <div className="scores-wrapper">
            <div className="image-wrapper">
                <img
                    src={image}
                    className="user-image"
                    alt=''
                />
            </div>

            <span className="user-name">{name}</span>
            <span className="scores">{scores}</span>
        </div>
    );
};

export default UserScores;

