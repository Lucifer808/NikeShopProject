import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjQxMjFmMjU3ODM0OWUxMjZjNmYzNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDA1MjM5MSwiZXhwIjoxNjM0MzExNTkxfQ.2yswnXpK3re1eDEwX7ViNbA3UCwnGFwWICGgWnz-mu4';

export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`},
});