import axios from "axios";

const API_BASE_URL = "http://localhost:8000/";

export const fetchCars = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "api/rest/cars");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};