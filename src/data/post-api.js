import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const postCreate = async (createPostRequest) => {
    try {
        const response = await axios.post(baseURL + `/post-create`, createPostRequest, jsonHeader);
        return response;
    } catch (error) {
        console.error("Post create failed:", error);
    }
}

const postGetMany = async (page, size) => {
    try {
        const response = await axios.get(baseURL + `/post-get-many/${page}/${size}`, jsonHeader);
        return response;
    } catch (error) {
        console.error("Post get many failed:", error);
    }
}

const postLikeUnlike = async (id,updateAction, likeRepresentation) => {
    try {
        const response = await axios.post(baseURL + `/post-like-unlike/${id}/${updateAction}`, likeRepresentation, jsonHeader);
        return response;
    } catch (error) {
        console.error("Post like/unlike failed:", error);
    }

}

const postDelete = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/post-delete/${id}`, jsonHeader);
        return response;
    } catch (error) {
        console.error("Post delete failed:", error);
    }

}

const postUpdate = async (id, updatePostRequest) => {
    try {
      let request = APIUtil.GenerateFormData(updatePostRequest);
        const response = await axios.put(baseURL + `/post-update/${id}`, request, jsonHeader);
        return response;
    } catch (error) {
        console.error("Post update failed:", error);
    }
}

const postAPi={
    postCreate,
    postGetMany,
    postLikeUnlike,
    postDelete,
    postUpdate
}
export default postAPi;
export {postAPi}