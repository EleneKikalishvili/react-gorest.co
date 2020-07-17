import axios from "axios";

axios.defaults.baseURL = "https://gorest.co.in/public-api/";
const token = "2YSHC6_CO2hgCm071T3oFe4cuLCkaU2Vi02k";

export const createUser = async ({ url, data }) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    window.alert("something went wrong");
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get("users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async (id) => {
  try {
    const response = await axios.get(`posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await axios.get("comments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSearchInfo = async (name) => {
  try {
    const response = await axios.get(`users?first_name=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
