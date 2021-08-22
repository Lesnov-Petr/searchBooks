import { isTotalBooks } from "../../redux/searchBooks";
import { useSelector } from "react-redux";
import styles from "./InfoOfSearch.module.scss";

const InfoOfSearch = () => {
  const totalBooks = useSelector(isTotalBooks);

  return (
    <div className={styles.blockInfo}>
      <p>Found {totalBooks} results</p>
    </div>
  );
};

export default InfoOfSearch;
