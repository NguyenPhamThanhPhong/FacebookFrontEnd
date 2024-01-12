import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const conversationCreate = async (createConversationRequest) => {
    try {
        const response = await axios.post(baseURL + `/conversation-create`, createConversationRequest, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const conversationGetFromIds = async (ids,skip) => {
    try {
        const response = await axios.post(baseURL + `/conversation-get-from-ids/${skip}`, ids, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const conversationSearch = async (searchRequest) => {
    try {
        const response = await axios.post(baseURL + `/conversation-search`, searchRequest, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const conversationApi = {
    conversationCreate,
    conversationGetFromIds,
    conversationSearch
}

export default conversationApi
export {conversationApi}