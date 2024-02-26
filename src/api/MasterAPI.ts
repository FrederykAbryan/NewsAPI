import axios from "axios";

// const accessToken = import.meta.env.VITE_ACCESS_TOKEN_AUTH
const API_KEY = import.meta.env.VITE_API_KEY
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    // Authorization: `Bearer ${accessToken}`,
  }
})

  export const topHeadline = async () => {
    return (await axiosInstance.get(`/top-headlines?country=id&apiKey=${API_KEY}`)).data
  }
  export const getSport = async () => {
    return (await axiosInstance.get(`/top-headlines?country=id&category=sports&apiKey=${API_KEY}`)).data
  }

  export const getTech = async () => {
    return (await axiosInstance.get(`/top-headlines?country=id&category=technology&apiKey=${API_KEY}`)).data
  }