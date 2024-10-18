import React, { useRef, useState } from 'react';
import './styles.scss';

const TextField = ({
    sendMessage,
}) => {
    const [value, setValue] = useState('');

    const textRef = useRef();

    const onClickHandler = () => {
        if (value) {
            sendMessage(value);

            setValue('');
        }
    };

    const onChangeHandler = event => {
        const { target: { value } } = event;

        setValue(value);
    };

    const handleOnFocus = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();

            if (value) {
                sendMessage(value);
                setValue('');
            }
        }
    };

    return (
        <div className="text-field-container">
            <textarea
                ref={textRef}
                value={value}
                onChange={onChangeHandler}
                onKeyDown={handleOnFocus}
                placeholder={'Send a message...'}
                className="text-field"
            />
            <div
                className="text-field-button"
                onClick={onClickHandler}
            >
                SEND
            </div>
        </div>
    );
};

export default TextField;
