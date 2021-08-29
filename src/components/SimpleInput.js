import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsvalid,
        hasError: nameHasError,
        valueInputChangeHandler: nameChangeHandler,
        valueInputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim(''));

    const {
        value: enteredEmail,
        isValid: enteredEmailIsvalid,
        hasError: emailHasError,
        valueInputChangeHandler: emailChangeHandler,
        valueInputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;

    if (enteredNameIsvalid && enteredEmailIsvalid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsvalid) {
            return;
        }

        console.log(enteredName);

        resetNameInput();

        resetEmailInput();
    };

    const nameInputClasses = nameHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameHasError && (
                    <p className="error-text">Name must not be empty!</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Please enter a valid email</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
