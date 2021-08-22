import { createSelector } from "@reduxjs/toolkit";

const isBooks = (state) => state.books.listBooks;
const isItemBook = (state) => state.books.isBook;
const isTotalBooks = (state) => state.books.totalBooks;
const isLoading = (state) => state.books.isLoading;
const isCategorie = (state) => state.books.isCategoie;

const getIsFilterBooks = createSelector(
  [isBooks, isCategorie],
  (books, categorie) => {
    return categorie === ""
      ? books
      : books.filter((book) =>
          book.volumeInfo.categories.includes(categorie) ? book : null
        );
  }
);

export {
  isBooks,
  isItemBook,
  isTotalBooks,
  isLoading,
  isCategorie,
  getIsFilterBooks,
};
