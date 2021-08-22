import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { openBook } from "../../redux/searchBooks";
import styles from "./ItemBook.module.scss";

const ItemBook = ({ isBook }) => {
  const dispatch = useDispatch();

  const { volumeInfo, id } = isBook;

  const handleOpenBook = () => {
    dispatch(openBook(id));
  };

  const linkTo = {
    pathname: `/book/${id}`,
  };

  const baseImage =
    volumeInfo?.imageLinks?.thumbnail ??
    "https://серебро.рф/img/placeholder.png";

  return (
    <li className={styles.itemBook}>
      <Link to={linkTo}>
        <div className={styles.box__img} onClick={handleOpenBook}>
          <img
            className={styles.itemBook__img}
            src={baseImage}
            alt={volumeInfo.title}
          />
        </div>
      </Link>
      <div>
        <ul>
          {volumeInfo.categories &&
            volumeInfo.categories.map((categorie) => (
              <li key={uuidv4()}>{categorie}</li>
            ))}
        </ul>
        <h2>{volumeInfo.title}</h2>
        <ul>
          {volumeInfo.authors &&
            volumeInfo.authors.map((author) => (
              <li key={uuidv4()}>{author}</li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default ItemBook;
