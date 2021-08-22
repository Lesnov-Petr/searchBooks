import { createSlice } from "@reduxjs/toolkit";

const initialSearchBooks = {
  listBooks: [],
  isBook: {},
  totalBooks: 0,
  isLoading: false,
  isCategoie: "",
};

const { actions, reducer } = createSlice({
  name: "books",
  initialState: initialSearchBooks,
  error: null,
  reducers: {
    totalBooksSuccess: (state, { payload }) => {
      state.totalBooks = payload;
      state.isLoading = false;
    },
    categorieBooksSuccess: (state, { payload }) => {
      state.isCategoie = payload;
    },
    searchBooksSuccess: (state, { payload }) => {
      state.listBooks = payload;
      state.isLoading = false;
    },

    searchBooksRequest: (state) => {
      state.isLoading = true;
    },

    searchBooksError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    openBookRequest: (state) => {
      state.isLoading = true;
    },
    openBookSuccess: (state, { payload }) => {
      state.isBook = payload;
      state.isLoading = false;
    },
    openBookError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
