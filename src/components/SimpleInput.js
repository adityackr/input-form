import { useState } from 'react';

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setenteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setenteredNameTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setenteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        setEnteredName('');
        setenteredNameTouched(false);
    };

    const nameInputClasses = nameIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
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
