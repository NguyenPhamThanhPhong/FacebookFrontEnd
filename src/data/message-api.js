import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const messageSend = async (message) => {
    try {
        const response = await axios.post(baseURL + `/message-send`, message, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const messageDelete = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/message-delete/${id}`, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const messageGetMany = async (ids,skip) => {
    try {
        const response = await axios.post(baseURL + `/message-get-many/${skip}`, ids, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const messageSearch = async (searchRequest) => {
    try {
        const response = await axios.post(baseURL + `/message-search`, searchRequest, jsonHeader);
        return { isError: false, data: response };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const messageApi = {
    messageSend,
    messageDelete,
    messageGetMany,
    messageSearch
}
export default messageApi
export {messageApi}