import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const viewDTO = async (id) => {
    try {
        const response = await axios.get(baseURL + `/viewDTO/${id}`, jsonHeader);
        return response;
    } catch (error) {
        console.error("View DTO failed:", error);
    }
}

const updateEmail = async (id, email) => {
    try {
        const response = await axios.post(baseURL + `/update-email/${id}`, email, jsonHeader);
        return response;
    } catch (error) {
        console.error("Update email failed:", error);
    }
}

const updatePassword = async (id, password) => {
    try {
        const response = await axios.post(baseURL + `/update-password/${id}`, password, jsonHeader);
        return response;
    } catch (error) {
        console.error("Update password failed:", error);
    }
}

const updatePersonalInfo = async (id, personalInfo) => {
    try {
        let request = APIUtil.GenerateFormData(personalInfo);
        const response = await axios.post(baseURL + `/update-personal-info/${id}`, request, formdataHeader);
        return response;
    } catch (error) {
        console.error("Update personal info failed:", error);
    }
}

const userDelete = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/user-delete/${id}`, jsonHeader);
        return response;
    } catch (error) {
        console.error("Delete user failed:", error);
    }
}

const userAPI = {
    viewDTO: viewDTO,
    updateEmail: updateEmail,
    updatePassword: updatePassword,
    updatePersonalInfo: updatePersonalInfo,
    userDelete: userDelete
}

export default userAPI;
export { userAPI };