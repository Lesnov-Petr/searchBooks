import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks, isBooks, actions } from "../../redux/searchBooks";
import styles from "./FormSearch.module.scss";

const FormSearch = () => {
  const [isQuery, setQuery] = useState("");
  const listBooks = useSelector(isBooks);

  const dispatch = useDispatch();

  const listOprions = listBooks
    .map(({ volumeInfo: { categories } }) =>
      categories ? categories[0] : null
    )
    .filter((option, idx, arrya) => arrya.indexOf(option) === idx);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchBooks(isQuery));
    dispatch(actions.categorieBooksSuccess(event.target.value));
  };

  const handleChangeQuery = (event) => {
    let qiery = event.target.value;
    setQuery(qiery);
  };

  const handleChangeCategorie = (event) => {
    dispatch(actions.categorieBooksSuccess(event.target.value));
  };

  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <input
        className={styles.form__input}
        type="text"
        name={isQuery}
        value={isQuery}
        onChange={handleChangeQuery}
        placeholder="Введите запрос книги"
      />
      <button type="submit">Поиск</button>
      <div className={styles.selector}>
        <span>categories</span>
        <select
          className={styles.form__options}
          name="categories"
          value=""
          onChange={handleChangeCategorie}
          id="1"
        >
          {listOprions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span>sorring by</span>
        <select className={styles.form__options} name="sort" id="2"></select>
      </div>
    </form>
  );
};

export default FormSearch;
