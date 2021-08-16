import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../redux/searchBooks";

const FormSearch = () => {
  const [isQuery, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchBooks(isQuery));
  };

  const handleChangeQuery = (event) => {
    let qiery = event.target.value;
    setQuery(qiery);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name={isQuery}
        value={isQuery}
        onChange={handleChangeQuery}
        placeholder="Введите запрос книги"
      />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default FormSearch;
