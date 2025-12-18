import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL_DEVELOP,
  headers: {
    "Content-Type": "application/json",
    timeout: 3000,
    "Accept-Language": "vn",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "max-age=10",
    "CDN-Cache-Control": "max-age=60",
    "Vercel-CDN-Cache-Control": "max-age=180",
  },
});

export default instance;
