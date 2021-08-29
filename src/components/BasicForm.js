import useInput from '../hooks/use-input';

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameHasError,
        valueInputChangeHandler: firstNameChangeHandler,
        valueInputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput((value) => value.trim(''));

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameHasError,
        valueInputChangeHandler: lastNameChangeHandler,
        valueInputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput((value) => value.trim(''));

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        valueInputChangeHandler: emailChangeHandler,
        valueInputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;

    if (
        enteredFirstNameIsValid &&
        enteredLastNameIsValid &&
        enteredEmailIsValid
    ) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(
            `Name: ${enteredFirstName} ${enteredLastName}, Email: ${enteredEmail}`
        );

        resetFirstName();
        resetLastName();
        resetEmail();
    };
    const firstNameInputClass = firstNameHasError
        ? 'form-control invalid'
        : 'form-control';
    const lastNameInputClass = lastNameHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClass = emailHasError
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={firstNameInputClass}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        value={enteredFirstName}
                    />
                    {firstNameHasError && (
                        <p className="error-text">
                            First name must not be empty
                        </p>
                    )}
                </div>
                <div className={lastNameInputClass}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameHasError && (
                        <p className="error-text">
                            Last name must not be empty
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClass}>
                <label htmlFor="email">E-Mail Address</label>
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

export default BasicForm;
