import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css'
import {Link} from 'react-router-dom'

function Signup(){
    const [startDate, setStartDate] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [errorField, setErrorField] = useState('');
    const [messageColorClass, setmessageColorClass] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const formContainer = document.querySelector('.form_container');
        setTimeout(() => {
            formContainer.classList.add('centered');
        }, 0); 
        return () => {
            formContainer.classList.remove('centered');
        };
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const formElements = form.elements;
        let isValid = true;
        let errorField = '';

        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].type !== "submit" && formElements[i].value.trim() === "") {
                isValid = false;
                errorField = formElements[i].name;
                break;
            }
        }

        if (!isValid) {
            setErrorField(errorField);
            setStatusMessage(getErrorMessage(errorField));
            setmessageColorClass('text-danger');
            setTimeout(() => {
                setErrorField('');
            }, 200);
        } else {
            if (formElements.password.value !== confirmPassword) {
                setErrorField('confirmPassword');
                setStatusMessage("Passwords do not match.");
                setmessageColorClass('text-danger');
                formElements.confirmPassword.value = "";
                setTimeout(() => {
                    setErrorField('');
                }, 200);
                return;
            }
            setStatusMessage("Registration successful!");
            setmessageColorClass('text-success');
            formElements.firstName.value = "";
            formElements.lastName.value = "";
            formElements.email.value = "";
            formElements.password.value = "";
            formElements.confirmPassword.value = "";
            formElements.gender.value = "";
        }
    };

    const handleInputChange = () => {
        setErrorField('');
        setStatusMessage('');
    };

    const getErrorMessage = (field) => {
        switch (field) {
            case 'firstName':
            case 'lastName':
                return "Please enter your name.";
            case 'email':
                return "Please enter your email or mobile number.";
            case 'password':
                return "Please enter your password.";
            case 'confirmPassword':
                return "Please confirm your password.";
            case 'birthdate':
                return "Please select your birthdate.";
            case 'gender':
                return "Please select your gender.";
            default:
                return "Please enter the required information.";
        }
    };

    return(
     <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
        <div className='form_container p-5 rounded'>
           <form onSubmit={handleRegister}>
               <h3 className='text-center fw-bold'>Sign up</h3>
                    <br></br>
                    <div className='mb-2 d-flex'>
                        <input
                            type="text"
                            placeholder='First Name'
                            className={`form_control ${errorField === 'firstName' ? 'error' : ''}`}
                            name="firstName"
                            onFocus={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder='Last Name'
                            className={`form_control ${errorField === 'lastName' ? 'error' : ''}`}
                            name="lastName"
                            onFocus={handleInputChange}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            type="email"
                            placeholder='Enter Email or Phone number'
                            className={`form_control ${errorField === 'email' ? 'error' : ''}`}
                            name="email"
                            onFocus={handleInputChange}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className={`form_control ${errorField === 'password' ? 'error' : ''}`}
                            name="password"
                            onFocus={handleInputChange}
                        />
                    </div>
                    <div className='mb-2'>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className={`form_control ${errorField === 'confirmPassword' ? 'error' : ''}`}
                            name="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onFocus={handleInputChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <div className='row'>
                            <div className={`col ${errorField === 'birthdate' ? 'has-error' : ''}`}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    className='form-control datepicker-input'
                                    placeholderText='Select Birthdate'
                                    name="birthdate"
                                    onFocus={handleInputChange}
                                />
                            </div>
                            <div className={`col ${errorField === 'gender' ? 'has-error' : ''}`}>
                            <select id="gender" className='form-select' name="gender" onFocus={handleInputChange}>
                            <option value="" disabled hidden>
                                Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            {statusMessage && <div className={`mb-2 fw-bold ${messageColorClass}`}>{statusMessage}</div>}
                <div className='d-grid'>
                    <button type="submit" className='btn btn-info fw-bold' style={{ color: 'white' }}>Register</button>
                </div>
                <br></br>
                <p className='text-center'>
                    Return to<Link to="/" className='textref-link ms-2 fw-bold'>Sign in</Link>
                </p>
           </form>
        </div>
    </div>
    )
}
export default Signup