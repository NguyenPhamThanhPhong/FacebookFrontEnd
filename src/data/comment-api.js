import APIUtil from "./util-api.js";
import axios from "axios";


const baseURL = APIUtil.baseURL;
const jsonHeader = APIUtil.jsonHeader;
const formdataHeader = APIUtil.formdataHeader;

const getMany = async (ids, skip) => {
    try {
        const response = await axios.get(baseURL + `/comment-get-many/${ids}/${skip * 50}`, jsonHeader);
        return { isError: false, data: response.data };

    } catch (error) {
        return { isError: true, data: error };    }
}

const create = async (createCommentRequest) => {
    try {
        let request = APIUtil.GenerateFormData(createCommentRequest);
        const response = await axios.post(baseURL + `/comment-create`, request, jsonHeader);
        return { isError: false, data: response.data };

    } catch (error) {
        return { isError: true, data: error };    }
}

const update = async (updateCommentRequest) => {
    try {
        let request = APIUtil.GenerateFormData(updateCommentRequest);
        const response = await axios.put(baseURL + `/comment-update`, request, jsonHeader);
        return { isError: false, data: response.data };

    } catch (error) {
        return { isError: true, data: error };    }
}

const deleteComment = async (id) => {
    try {
        const response = await axios.delete(baseURL + `/comment-delete/${id}`, jsonHeader);
        return { isError: false, data: response.data };

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
export const Commentdata = [
    {
        "Id": "60c7d8c8b7932f56d882c73a",
        "PostId": "123456789",
        "ParentId": null,
        "UserId": "user123",
        "CommentTime": "2024-01-08T12:34:56Z",
        "Content": "This is a sample comment.",
        "ChildCommentIds": ["child1", "child2", "child3"]
    },
    {
        "Id": "60c7d8c8b7932f56d882c73a",
        "PostId": "123456789",
        "ParentId": null,
        "UserId": "user123",
        "CommentTime": "2024-01-08T12:34:56Z",
        "Content": "This is a sample comment.",
        "ChildCommentIds": ["child1", "child2", "child3"]
    }
]
