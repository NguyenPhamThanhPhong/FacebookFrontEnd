import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const postCreate = async (createPostRequest) => {
    try {
        const response = await axios.post(baseURL + `/post-create`, createPostRequest, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const postGetFromIds = async (ids) => {
    try {
        const response = await axios.post(baseURL + `/post-get-many`, ids, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const postLikeUnlike = async (id, updateAction, likeRepresentation) => {
    try {
        const response = await axios.post(baseURL + `/post-like-unlike/${id}/${updateAction}`, likeRepresentation, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }

}

const postDelete = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/post-delete/${id}`, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }

}

const postUpdate = async (id, updatePostRequest) => {
    try {
        const response = await axios.put(baseURL + `/post-update/${id}`, updatePostRequest, jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const postApi = {
    postCreate,
    postGetFromIds,
    postLikeUnlike,
    postDelete,
    postUpdate
}
export default postApi;
export { postApi }