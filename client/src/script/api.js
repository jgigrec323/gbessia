import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

export const addNewsletterEmail = async (userData) => {
  try {
    const response = await axiosInstance.post("/newsletter", userData);
    return response;
  } catch (error) {
    throw error;
  }
};
