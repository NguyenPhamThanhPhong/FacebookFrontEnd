import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const getMany = async (ids, skip) => {
    try {
        const response = await axios.post(baseURL + `/comment-get-many/${skip * 50}`,ids, jsonHeader);
        return { isError: false, data: response };

    } catch (error) {
        return { isError: true, data: error };    }
}

const create = async (createCommentRequest) => {
    try {
        const response = await axios.post(baseURL + `/comment-create`, createCommentRequest, jsonHeader);
        return { isError: false, data: response };

    } catch (error) {
        return { isError: true, data: error };    }
}

const update = async (updateCommentRequest) => {
    try {
        let request = APIUtil.GenerateFormData(updateCommentRequest);
        const response = await axios.put(baseURL + `/comment-update`, request, jsonHeader);
        return { isError: false, data: response };

    } catch (error) {
        return { isError: true, data: error };    }
}

const deleteComment = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/comment-delete/${id}`, jsonHeader);
        return { isError: false, data: response };

    } catch (error) {
        return { isError: true, data: error };    }
}

const commentApi = {
    getMany,
    create,
    update,
    deleteComment
}
export { commentApi }

