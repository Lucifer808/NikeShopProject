import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
let TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken || null;

export const publicReq = axios.create({
    baseURL: BASE_URL,
});
export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});