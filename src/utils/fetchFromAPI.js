import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const RAPID_API_KEY = '7102065464msh2ee489d66de7b54p1d9125jsn1aed4694f9fa'

const options = {
  params: {
    maxResults: '100',
  },
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};