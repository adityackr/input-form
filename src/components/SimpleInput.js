import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
    const nameInputRef = useRef();

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setenteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log('Name input is valid!');
        }
    }, [enteredNameIsValid]);

    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setenteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setenteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName('');
    };

    const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                    value={enteredName}
                />
                {nameIsInvalid && (
                    <p className="error-text">Name must not be empty!</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
