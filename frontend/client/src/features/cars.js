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

export const postCar = async (car, user) => {

  axios.post(API_BASE_URL + 'api/rest/cars', {
    body: {
      name: car.carName,
      make: car.make,
      model: car.model,
      year: car.year,
      vin: car.vin,
      user_id: 1
    }
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
};
