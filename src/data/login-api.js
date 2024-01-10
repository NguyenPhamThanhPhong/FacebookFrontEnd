import axios from 'axios';
import APIUtil from './util-api';

const registerUser = async (userData) => {
  try {
    const form = APIUtil.GenerateFormData(userData);

    const response = await axios.post(APIUtil.baseURL+'/register', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

const loginUser = async (username,password) => {
    try{
        const loginRequest={
            username,password
        }
        const response = await axios.post(APIUtil.baseURL+'/login', loginRequest)
        return response;
    }
    catch(error){
        return error;
    }
}

const sendMailVerification = async (email) => {
    try{
        const response = await axios.post(APIUtil.baseURL+'/send-mail-verification', email)
        return response;
    }
    catch(error){
        console.error('Login failed:', error);
        return error;
    }
}

const confirmMail = async (id,token) => {
    try{
        const response = await axios.post(APIUtil.baseURL+`/confirm-mail/${id,token}`, token)
        return response;
    }
    catch(error){
        console.error('Login failed:', error);
        return error;
    }
}



const LoginAPICall = {
    register: registerUser,
    login: loginUser,
    sendMailVerification,
    confirmMail
  };
  

export default LoginAPICall;
