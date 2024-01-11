import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;



const registerUser = async (userCreateRequest) => {
  try {

    const response = await axios.post(APIUtil.baseURL+'/register', userCreateRequest, jsonHeader);
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
        const response = await axios.post(APIUtil.baseURL+'/login', loginRequest, jsonHeader)
        return response;
    }
    catch(error){
        return error;
    }
}

const sendMailVerification = async (loginRequest) => {
    try{
        const response = await axios.post(APIUtil.baseURL+'/send-mail-verification',loginRequest, jsonHeader)
        return response;
    }
    catch(error){
        console.error('Login failed:', error);
        return error;
    }
}

const confirmMail = async (id,code) => {
    try{
        const response = await axios.post(APIUtil.baseURL+`/confirm-mail/${id}`,code, jsonHeader)
        return response;
    }
    catch(error){
        console.error('Login failed:', error);
        return error;
    }
}



const loginAPI = {
    register: registerUser,
    login: loginUser,
    sendMailVerification,
    confirmMail
  };
  

export default loginAPI;
export {loginAPI}

