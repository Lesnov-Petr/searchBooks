import styles from "./InfoOfBook.module.scss";
import { useSelector } from "react-redux";
import { isItemBook } from "../../redux/searchBooks";

const InfoOfBook = () => {
  const isBook = useSelector(isItemBook);
  const { volumeInfo } = isBook;

  const baseImage =
    volumeInfo?.imageLinks?.thumbnail ??
    "https://серебро.рф/img/placeholder.png";

  return (
    <div>
      <div className={styles.pageBook__img}>
        <img src={baseImage} alt={volumeInfo.title} />
      </div>
      <h1 className={styles.title}>{volumeInfo.title}</h1>
    </div>
  );
};

export default InfoOfBook;
