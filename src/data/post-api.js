import axios from "axios";
import APIUtil from "./util-api";

// const registerUser = async (post) => {
//     try {
//       const form = APIUtil.GenerateFormData(post);

// const baseURL = APIUtil.baseURL;
// const jsonHeader = APIUtil.jsonHeader;
// const formdataHeader = APIUtil.formdataHeader;

// const postCreate = async (createPostRequest) => {
//     try {
//         const response = await axios.post(baseURL + `/post-create`, createPostRequest, jsonHeader);
//         return { isError: false, data: response.data };
//     } catch (error) {
//         return { isError: true, data: error };
//     }
// }
//       const response = await axios.post(APIUtil.baseURL+'/create', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response;
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

// const postGetFromIds = async (ids) => {
//     try {
//         const response = await axios.post(baseURL + `/post-get-many`, ids, jsonHeader);
//         return { isError: false, data: response.data };
//     } catch (error) {
//         return { isError: true, data: error };
//     }
// }

// const postLikeUnlike = async (id, updateAction, likeRepresentation) => {
//     try {
//         const response = await axios.post(baseURL + `/post-like-unlike/${id}/${updateAction}`, likeRepresentation, jsonHeader);
//         return { isError: false, data: response.data };
//     } catch (error) {
//         return { isError: true, data: error };
//     }

// }

// const postDelete = async (id) => {
//     try {
//         const response = await axios.delete(baseURL + `/post-delete/${id}`, jsonHeader);
//         return { isError: false, data: response.data };
//     } catch (error) {
//         return { isError: true, data: error };
//     }

// }

// const postUpdate = async (id, updatePostRequest) => {
//     try {
//         const response = await axios.put(baseURL + `/post-update/${id}`, updatePostRequest, jsonHeader);
//         return { isError: false, data: response.data };
//     } catch (error) {
//         return { isError: true, data: error };
//     }
// }

const postApi = {
    // postCreate,
    // postGetFromIds,
    // postLikeUnlike,
    // postDelete,
    // postUpdate
}

export default postApi;
export { postApi }

export const Postdata = [
  {
    "_id": {
      "$oid": "65700071aa1194e5a0bd1966"
    },
    "Title": "Hello my name is....",
    "Content": "helloadsfasdfasdfasds",
    "SharedPost": null,
    "FileUrls": {
      "hello.png": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png",
      "abc.png": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png",
    },
    "Owner": {
      "UserId": "656de57f992e34373c23dc05",
      "Name": "Ẩn danh",
      "AvatarUrl": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png"
    },
    "Likes": [
      {
        "userId": "656de57f992e34373c23dc056",
        "name": "abzxc",
        "emoji": 4
      },
      {
        "userId": "656de57f992e34373c23dc05",
        "name": "abzxcd",
        "emoji": 4
      }
    ],
    "Comments": [
      {
        "Id": "60c7d8c8b7932f56d882c73a",
        "AvatarUrl": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png",
        "PostId": "123456789",
        "ParentId": null,
        "UserId": "user123",
        "CommentTime": "2024-01-08T12:34:56Z",
        "Content": "This is a sample comment.",
        "ChildCommentIds": ["child1", "child2", "child3"]
      },
      {
        "Id": "60c7d8c8b7932f56d882c73b",
        "AvatarUrl": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png",
        "PostId": "123456789",
        "ParentId": null,
        "UserId": "user123",
        "CommentTime": "2024-01-08T12:34:56Z",
        "Content": "This is a sample comment.",
        "ChildCommentIds": ["child1", "child2", "child3"]
      }
    ]
  },
  
  {
    "_id": {
      "$oid": "65700071aa1194e5a0bd1967"
    },
    "Title": "Hello my name is....",
    "Content": "helloadsfasdfasdfasds",
    "SharedPost": null,
    "FileUrls": {
      "abc.png": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png",
      
    },
    "Owner": {
      "UserId": "656de57f992e34373c23dc05",
      "Name": "Ẩn danh",
      "AvatarUrl": "https://res.cloudinary.com/dm45tt6nt/image/upload/v1701701000/User/w9m4gdo2ekzkwsvuzvez.png"
    },
    "Likes": [
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
    "Comments": [
      
    ]
  }
];
