import React, { useState, useEffect } from "react";
import './style.css'
import {Link} from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
  
    useEffect(() => {
        const formContainer = document.querySelector('.form_container');
        setTimeout(() => {
            formContainer.classList.add('centered');
        }, 0); 
        return () => {
            formContainer.classList.remove('centered');
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setEmailError(false);
        setStatusMessage("");
        if (!email) {
            setEmailError(true);
            setStatusMessage("The email address or phone number you entered isn't connected to an account.");
            setTimeout(() => {
                setEmailError(false);
            }, 200); 
            return;
        }
        if (!password) {
            setPasswordError(true);
            setStatusMessage("The password you entered is incorrect.");
            setTimeout(() => {
                setPasswordError(false);
            }, 200);
            return;
        }
    };

    const handleInputChange = () => {
        setStatusMessage('');
    };

    return(
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100'>
            <div className='form_container p-5 rounded'>
               <form>
                <h3 className='text-center fw-bold'>Sign in</h3>
                <br></br>
                <div className='mb-3'>
                    <input 
                        type="email"
                        placeholder='Email or Phone number'
                        className={`form_control ${emailError ? 'error' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={handleInputChange}
                    />
                </div>
                <div className='mb-3'>
                    <input 
                        type="password" 
                        placeholder='Password'
                        className={`form_control ${passwordError ? 'error' : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={handleInputChange}
                    />
                </div>
                <div className='mb-3 d-flex justify-content-between align-items-center' style={{ fontSize: '15px'}}>
                        <div>
                            <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                            <label htmlFor="check" className='custom-input-label ms-2'>
                                Remember me
                            </label>
                        </div>
                        <p className='mb-0' style={{ fontSize: '14px', textAlign: 'right'}}>
                            <a href="" className='textref-link'>Forgot Password?</a>
                        </p>
                </div>
                {statusMessage && <div className="mb-2 text-danger fw-bold">{statusMessage}</div>}
                <div className='d-grid'>
                    <button className='btn btn-primary fw-bold' onClick={handleLogin}>Log in</button>
                </div>
                <br></br>
                <p className='text-center'>
                    Don't have an account yet?<Link to="/signup" className='textref-link ms-2 fw-bold'>Register</Link>
                </p>
               </form>
            </div>
        </div>
    )
}

export default Login