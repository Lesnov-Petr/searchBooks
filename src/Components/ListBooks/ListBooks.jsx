import ItemBook from "../ItemBook";
import { isBooks, getIsFilterBooks } from "../../redux/searchBooks";
import { useSelector } from "react-redux";
import styles from "./ListBooks.module.scss";

const ListBooks = () => {
  const listBooks = useSelector(getIsFilterBooks);
  return (
    <ul className={styles.listBooks}>
      {listBooks.map((book) => (
        <ItemBook key={book.id} isBook={book} />
      ))}
    </ul>
  );
};

export default ListBooks;
