import axios from 'axios';
import APIUtil from './util-api';


const registerUser = async (post) => {
    try {
      const form = APIUtil.GenerateFormData(post);
  
      const response = await axios.post(APIUtil.baseURL+'/create', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  


const postGetFromIds = async (ids) => {
    try {
        const response = await axios.post(APIUtil.baseURL + `/post-get-many`, ids, APIUtil.jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const postLikeUnlike = async (id, updateAction, likeRepresentation) => {
    try {
        const response = await axios.post(APIUtil.baseURL + `/post-like-unlike/${id}/${updateAction}`, likeRepresentation, APIUtil.jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }

}

const postDelete = async (id) => {
    try {
        const response = await axios.delete(APIUtil.baseURL + `/post-delete/${id}`, APIUtil.jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }

}

const postUpdate = async (id, updatePostRequest) => {
    try {
        const response = await axios.put(APIUtil.baseURL + `/post-update/${id}`, updatePostRequest, APIUtil.jsonHeader);
        return { isError: false, data: response.data };
    } catch (error) {
        return { isError: true, data: error };
    }
}

const postApi = {
    // postCreate,
    postGetFromIds,
    postLikeUnlike,
    postDelete,
    postUpdate
}

export default postApi;
export { postApi }

export const Postdata = [
  {
    "id": "659b8bbc062d31cfeaa59d5a",
    "title": "Hallo",
    "content": "zxcvzcxv",
    "sharedPost": "",
    "fileUrls": {
        "hello.png": "https://jalksdfjlj.png",
        "abc.png": "https://asjdklfjaskdjf.png",
    },
    
    "owner": {
      "userId": "656de57f992e34373c23dc05",
      "name": "Ẩn danh",
      "avatarUrl": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png"
    },
    "likes": [
      {
        "userId": "656de57f992e34373c23dc05",
        "name": "abzxc",
        "emoji": 4
      },        
      {
        "userId": "656de57f992e34373c23dc05",
        "name": "abzxc",
        "emoji": 4
      }
      ],
    "commentIds": ["",""]
  },

]
