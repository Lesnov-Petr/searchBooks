import FormSearch from "../FormSearch";
import styles from "./Header.module.scss";

const Header = ({ onHandleToggleModal }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>Search for books</h1>
      <FormSearch />
    </div>
  );
};

export default Header;
