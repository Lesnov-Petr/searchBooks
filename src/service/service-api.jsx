import axios from "axios";
axios.defaults.baseURL = `https://www.googleapis.com/books/v1`;

const serviceAPI = {
  key: "AIzaSyCq3bQNy6u5ibNwPrTgR_YT4f3kuhDkaDI",

  getBooksList(query) {
    return axios.get(`/volumes?q=${query}`);
  },

  getBook(id) {
    return axios.get(`/volumes/${id}`);
  },
};

export default serviceAPI;
