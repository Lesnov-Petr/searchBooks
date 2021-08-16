import axios from "axios";
axios.defaults.baseURL = `https://www.googleapis.com/books/v1`;

const serviceAPI = {
  getBooksList(query) {
    return axios.get(`/volumes?q=${query}`);
  },
};

export default serviceAPI;
