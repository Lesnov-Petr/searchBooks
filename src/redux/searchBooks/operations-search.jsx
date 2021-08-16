import { actions } from ".";
import serviceAPI from "../../service";

const {
  searchBooksSuccess,
  searchBooksRequest,
  searchBooksError,
  totalBooksSuccess,
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

export { searchBooks };
