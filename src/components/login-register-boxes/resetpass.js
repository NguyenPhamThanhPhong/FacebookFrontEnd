import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function Resetpass() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [messageColorClass, setmessageColorClass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [disableInput, setDisableInput] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const formContainer = document.querySelector('.form_container');
        formContainer.classList.add('centered');

        return () => {
            formContainer.classList.remove('centered');
        };
    }, []);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setNewPasswordError(false);
        setStatusMessage('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(false);
        setStatusMessage('');
    };

    const handleShowPasswordChange = () => {
        setShowPassword(!showPassword);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!newPassword) {
            setNewPasswordError(true);
            setStatusMessage("Please enter your new password.");
            setmessageColorClass('text-danger');
            setTimeout(() => {
                setNewPasswordError(false);
            }, 200);
            return;
        }

        if (!confirmPassword) {
            setConfirmPasswordError(true);
            setStatusMessage("Please confirm your new password.");
            setmessageColorClass('text-danger');
            setTimeout(() => {
                setConfirmPasswordError(false);
            }, 200);
            return;
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordError(true);
            setStatusMessage("Passwords don't match.");
            setmessageColorClass('text-danger');
            setTimeout(() => {
                setConfirmPasswordError(false);
            }, 200);
            setConfirmPassword('');
            return;
        }

        setmessageColorClass('text-success');
        setStatusMessage("Password has been reset successfully, you will be automatically redirected back to the login page shortly.");
        setNewPassword('');
        setConfirmPassword('');
        setDisableInput(true);
        setDisableButton(true);
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container p-5 rounded'>
                <form>
                    <h3 className='text-center fw-bold'>Reset Password</h3>
                    <br></br>
                    <div className='mb-3'>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder='Enter new password'
                            className={`form_control ${newPasswordError ? 'error' : ''}`}
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            readOnly={disableInput}
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder='Confirm new password'
                            className={`form_control ${confirmPasswordError ? 'error' : ''}`}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            readOnly={disableInput}
                        />
                    </div>
                    <div className='mb-1'>
                        <input
                            type="checkbox"
                            className='custom-control-input'
                            id="check"
                            onChange={handleShowPasswordChange}
                            checked={showPassword}
                        />
                        <label htmlFor="check" className='custom-control-label ms-2'>
                            Show Password
                        </label>
                    </div>
                    {statusMessage && <div className={`mb-2 fw-bold ${messageColorClass}`}>{statusMessage}</div>}
                    <div className='d-grid'>
                        <button
                            className='btn btn-primary fw-bold'
                            onClick={handleResetPassword}
                            disabled={disableButton} 
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Resetpass;
