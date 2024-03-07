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
export const getMainEvents = async () => {
  try {
    const response = await axiosInstance.get("/event/main");
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllEvents = async () => {
  try {
    const response = await axiosInstance.get("/event/all");
    return response;
  } catch (error) {
    throw error;
  }
};
