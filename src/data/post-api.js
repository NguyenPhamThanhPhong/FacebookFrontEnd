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
  