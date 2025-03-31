import axios from "axios";
import Cookies from 'js-cookie';

export const VIDEO_URL = process.env.REACT_APP_VIDEO_URL;
export const BASE_URL = process.env.REACT_APP_BASE_URL
const token = Cookies.get('accessToken')

const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const configUnAuthorize = {
  headers: {
    'Content-Type': 'application/json',
  }
}

const configAuthorize = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${VIDEO_URL}/${url}`, options);
  console.log(`Inside fetchFromAPI, complete serach URL : ${BASE_URL}/${url}`);
  console.log("Data fetched from URL :", data);
  return data;
};

export const fetchLogin = async(data) => {
  // await axios.post(`${BASE_URL}/login`, data, configUnAuthorize)
  if (data.username === '0971507603' && data.password === '12345') {
    return {
      status: 200,
      value: 'asdagdagjdadhalksdjalsd'
    }
  } else {
    return {
      status: 400,
      value: ''
    }
  }
}
