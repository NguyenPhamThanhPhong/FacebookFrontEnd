import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const getMany = async (ids, skip) => {
    try {
        const response = await axios.get(baseURL + `/comment-get-many/${ids}/${skip*50}`, jsonHeader);
        return response;
    } catch (error) {
        console.error("Comment get many failed:", error);
    }
}

const create = async (createCommentRequest) => {
    try {
      let request = APIUtil.GenerateFormData(createCommentRequest);
        const response = await axios.post(baseURL + `/comment-create`, request, jsonHeader);
        return response;
    } catch (error) {
        console.error("Comment create failed:", error);
    }
}

const update = async (updateCommentRequest) => {
    try {
      let request = APIUtil.GenerateFormData(updateCommentRequest);
        const response = await axios.put(baseURL + `/comment-update`, request, jsonHeader);
        return response;
    } catch (error) {
        console.error("Comment update failed:", error);
    }
}

const deleteComment = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/comment-delete/${id}`, jsonHeader);
        return response;
    } catch (error) {
        console.error("Comment delete failed:", error);
    }
}