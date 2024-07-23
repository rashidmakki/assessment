import axios from "axios";
import * as apiPaths from './apisPath';

const API  = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Accept": "Application/json",
        "content-type": "Application/json"
    }
});

API.interceptors.request.use((request)=>{
    if(localStorage.getItem("access_token")){
        const token = localStorage.getItem("access_token");
        request.headers.Authorization = `Bearer ${token}`
    }
    return request;
});

export const creatorSignup = (payLoad: any) => API.post(apiPaths.signup, payLoad);