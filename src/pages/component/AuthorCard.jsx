import { useState } from "react";
import { ReactComponent as FavoriteIcon } from "../../asset/favregular.svg";
import { ReactComponent as FavoriteYellowIcon } from "../../asset/favyellow.svg";
import Toast from "./Toast";
export const AuthorCard = ({ author, onClick, isFavAuthor = false }) => {
  const [showToast, setShowToast] = useState(false);
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);

    onClick(author);
  };
  return (
    <>
      <div key={author._id} className="card">
        <div className="favorite-btn" onClick={handleClick}>
          {isFavAuthor ? (
            <FavoriteYellowIcon />
          ) : (
            <FavoriteIcon className="image-icon" />
          )}
        </div>
        <div className="author-details">
          <h3 className="mt-1">{author.name}</h3>
          <p className="m-1">{truncateText(author.bio, 75)}</p>
          <a
            href={author.link}
            target="_blank"
            rel="noreferrer"
            className="read-more-btn m-1"
          >
            Read More
          </a>
        </div>
      </div>
      {showToast && (
        <Toast
          message={
            !isFavAuthor ? "Removed from favorites" : "Added to favorites"
          }
        />
      )}
    </>
  );
};
