import React, { useState, useEffect } from "react";
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

function Forgotpass() {
    const [email, setEmail] = useState('');
    const [passcode, setPasscode] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passcodeError, setPasscodeError] = useState(false);
    const [showPasscodeInput, setShowPasscodeInput] = useState(false);
    const [disableEmailInput, setDisableEmailInput] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [messageColorClass, setmessageColorClass] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        const formContainer = document.querySelector('.form_container');
        formContainer.classList.add('centered');

        return () => {
            formContainer.classList.remove('centered');
        };
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setStatusMessage('');
        setEmailError(false);
        setShowPasscodeInput(false);
        setDisableEmailInput(false);
        setShowButton(true);
    };

    const handlePasscodeChange = (e) => {
        setPasscode(e.target.value);
        setPasscodeError(false);
        setStatusMessage('');
    };

    const handleRequestPasswordReset = (e) => {
        e.preventDefault();
        if (!email.endsWith('@gmail.com')) {
            setEmailError(true);
            setStatusMessage("The email you entered is not connected to an account.");
            setmessageColorClass('text-danger');
            setTimeout(() => {
                setEmailError(false);
            }, 200);
            return;
        }
        setShowPasscodeInput(true);
        setDisableEmailInput(true);
        setShowButton(false);
        setmessageColorClass('text-success');
        setStatusMessage("A request for password reset email has been sent. If you don't see the email, check your spam folder.");
    };

    const handlePasscodeSubmit = (e) => {
        e.preventDefault();
        if (passcode !== '123456') {
            setPasscodeError(true);
            setStatusMessage("Incorrect passcode.");
            setmessageColorClass('text-danger');
            setTimeout(() => {
                setPasscodeError(false);
            }, 200);
            return;
        }

        navigate('/resetpass');
    };

    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container p-5 rounded'>
                <form>
                    <h3 className='text-center fw-bold'>Reset Password</h3>
                    <br></br>
                    <div className='mb-3'>
                        <input
                            type="email"
                            placeholder='Enter email address'
                            className={`form_control ${emailError ? 'error' : ''}`}
                            value={email}
                            onChange={handleEmailChange}
                            readOnly={disableEmailInput}
                        />
                    </div>
                    {showPasscodeInput && (
                        <div className='mb-3'>
                            <input
                                type="passcode"
                                placeholder='Enter passcode'
                                className={`form_control ${passcodeError ? 'error' : ''}`}
                                value={passcode}
                                onChange={handlePasscodeChange}
                            />
                        </div>
                    )}
                    {statusMessage && <div className={`mb-2 fw-bold ${messageColorClass}`}>{statusMessage}</div>}
                    {!showPasscodeInput && showButton && (
                        <div className='d-grid'>
                            <button className='btn btn-primary fw-bold' onClick={handleRequestPasswordReset}>Request Password Reset</button>
                        </div>
                    )}
                    {showPasscodeInput && (
                        <div className='d-grid mt-2'>
                            <button className='btn btn-primary fw-bold' onClick={handlePasscodeSubmit}>Submit Passcode</button>
                        </div>
                    )}
                    <br></br>
                    <p className='text-center'>
                        Return to<Link to="/" className='textref-link ms-2 fw-bold'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Forgotpass;