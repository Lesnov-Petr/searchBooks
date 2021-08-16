import { v4 as uuidv4 } from "uuid";

const ItemBook = ({ isBook: { volumeInfo } }) => {
  return (
    <li>
      <div>
        <img
          src={volumeInfo.imageLinks.smallThumbnail}
          alt={volumeInfo.title}
        />
      </div>
      <div>
        <ul>
          {volumeInfo.categories.map((categorie) => (
            <li key={uuidv4()}>{categorie}</li>
          ))}
        </ul>
        <h2>{volumeInfo.title}</h2>
        <ul>
          {volumeInfo.authors.map((author) => (
            <li key={uuidv4()}>{author}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ItemBook;
