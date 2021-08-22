import styles from "./BookPage.module.scss";
import { isLoading } from "../../redux/searchBooks";
import InfoOfBook from "../../Components/InfoOfBook";
import { useSelector } from "react-redux";

const BookPage = () => {
  const loading = useSelector(isLoading);
  return (
    <div className={styles.pageBook}>
      {loading ? "загрузка" : <InfoOfBook />}
    </div>
  );
};

export default BookPage;
