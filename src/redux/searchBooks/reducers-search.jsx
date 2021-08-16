import { createSlice } from "@reduxjs/toolkit";

const initialSearchBooks = {
  listBooks: [],
  totalBooks: 0,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: "books",
  initialState: initialSearchBooks,
  error: null,
  reducers: {
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

    totalBooksSuccess: (state, { payload }) => {
      state.totalBooks = payload;
      state.isLoading = false;
    },
  },
});

export { actions, reducer };
