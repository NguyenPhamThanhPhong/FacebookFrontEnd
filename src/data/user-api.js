import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = { headers: { 'Content-Type': 'application/json' } }
const formdataHeader = APIUtil.formdataHeader;

const viewDTO = async (id) => {
    try {
        const response = await axios.get(baseURL + `/viewDTO/${id}`, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const getFromIds = async (ids) => {
    try {
        const response = await axios.post(baseURL + `/get-from-ids`, ids, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const updateEmail = async (id, email) => {
    try {
        const response = await axios.post(baseURL + `/update-email/${id}`, email, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const updatePassword = async (username, password) => {
    try {
        const response = await axios.post(baseURL + `/update-password/${username}`, password, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const updatePersonalInfo = async (id, personalInfo) => {
    try {
        const response = await axios.post(baseURL + `/update-personal-info/${id}`, personalInfo, formdataHeader);
        console.log(response)
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const userDelete = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/user-delete/${id}`, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const userUpdateFriendRequest = async (targetId, option) => {
    try {
        const response = await axios.post(baseURL + `/user-update-friend-request/${targetId}/${option}`, null, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const userUpdateUnfriendAcceptRequest = async (targetId, option) => {
    try {
        const response = await axios.post(baseURL + `/user-unfriend-accept-request/${targetId}/${option}`, null, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const userUpdateBlockList = async (targetId, option) => {
    try {
        const response = await axios.post(baseURL + `/user-update-block-list/${targetId}/${option}`, null, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }

}

const userApi = {
    viewDTO: viewDTO,
    getFromIds: getFromIds,
    updateEmail: updateEmail,
    updatePassword: updatePassword,
    updatePersonalInfo: updatePersonalInfo,
    userUpdateFriendRequest: userUpdateFriendRequest,
    userUpdateUnfriendAcceptRequest: userUpdateUnfriendAcceptRequest,
    userUpdateBlockList: userUpdateBlockList,
    userDelete: userDelete
}

export default userApi;
export { userApi };