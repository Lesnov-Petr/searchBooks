import { actions } from ".";
import serviceAPI from "../../service";

const {
  searchBooksSuccess,
  searchBooksRequest,
  searchBooksError,
  totalBooksSuccess,
  openBookRequest,
  openBookSuccess,
  openBookError,
} = actions;

const searchBooks = (books) => async (dispatch) => {
  dispatch(searchBooksRequest());
  try {
    const { data } = await serviceAPI.getBooksList(books);
    dispatch(searchBooksSuccess(data.items));
    dispatch(totalBooksSuccess(data.totalItems));
  } catch (error) {
    dispatch(searchBooksError(error.message));
  }
};

const openBook = (id) => async (dispatch) => {
  dispatch(openBookRequest());
  try {
    const { data } = await serviceAPI.getBook(id);
    dispatch(openBookSuccess(data));
  } catch (error) {
    dispatch(openBookError(error.message));
  }
};

export { searchBooks, openBook };
