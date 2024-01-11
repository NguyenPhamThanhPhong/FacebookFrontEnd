import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const messageSend = async (message) => {
    try {
        const response = await axios.post(baseURL + `/message-send`, message, jsonHeader);
        return response;
    } catch (error) {
        console.error("Message send failed:", error);
    }
}