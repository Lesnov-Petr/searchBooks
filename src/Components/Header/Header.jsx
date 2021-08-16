import FormSearch from "../FormSearch";
import SelectorOfQuery from "../SelectorOfQuery";
import "./style.scss";

const Header = ({ onHandleToggleModal }) => {
  return (
    <div className="header">
      <h1>Search for books</h1>
      <FormSearch />
      <SelectorOfQuery />
    </div>
  );
};

export default Header;
