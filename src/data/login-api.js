import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = { headers: { 'Content-Type': 'application/json' } }
const formdataHeader = APIUtil.formdataHeader;



const registerUser = async (userCreateRequest) => {
    try {

        const response = await axios.post(APIUtil.baseURL + '/register', userCreateRequest, jsonHeader);

        return { isError: false, data: response };

    } catch (error) {
        return { isError: true, data: error };
    }
};

const loginUser = async (username, password) => {
    try {
        const loginRequest = {
            username, password
        }
        const response = await axios.post(APIUtil.baseURL + '/login', loginRequest, jsonHeader)
        localStorage.setItem('token', response.data);
        return { isError: false, data: response };
    }
    catch (error) {
        return { isError: true, data: error };
    }
}

const loginAuto = async () => {
    try {
        const response = await axios.get(APIUtil.baseURL + '/login-auto', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return { isError: false, data: response }; 
    } catch (error) {
        return { isError: true, data: error };
    }
};

const sendMailVerification = async (username) => {
    try {
        const response = await axios.post(APIUtil.baseURL + '/send-mail-verification', username, 
        { headers: { 'Content-Type': 'application/json' } })
        return { isError: false, data: response };

    }
    catch (error) {
        return { isError: true, data: error };
    }
}

const confirmMail = async (username, code) => {
    try {
        const response = await axios.post(APIUtil.baseURL + `/confirm-mail/${username}`, code, jsonHeader)
        return { isError: false, data: response };

    }
    catch (error) {
        return { isError: true, data: error };

    }
}



const loginApi = {
    registerUser,
    loginUser,
    loginAuto,
    sendMailVerification,
    confirmMail
};


export default loginApi;
export { loginApi }

