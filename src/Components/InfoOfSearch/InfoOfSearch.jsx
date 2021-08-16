import { isTotalBooks } from "../../redux/searchBooks";
import { useSelector } from "react-redux";

const InfoOfSearch = () => {
  const totalBooks = useSelector(isTotalBooks);

  return (
    <div>
      <p>{`${totalBooks}`}</p>
    </div>
  );
};

export default InfoOfSearch;
