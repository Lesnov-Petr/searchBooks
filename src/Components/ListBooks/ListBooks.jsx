import ItemBook from "../ItemBook";
import { isBooks } from "../../redux/searchBooks";
import { useSelector } from "react-redux";

const ListBooks = () => {
  const listBooks = useSelector(isBooks);
  return (
    <div>
      <ul>
        {listBooks.map((book) => (
          <ItemBook key={book.id} isBook={book} />
        ))}
      </ul>
    </div>
  );
};

export default ListBooks;
