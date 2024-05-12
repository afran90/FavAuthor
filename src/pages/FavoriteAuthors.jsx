import { useState } from "react";
import { Paginator } from "./component/Paginator";
import { useSelector } from "react-redux";
import { AuthorCard } from "./component/AuthorCard";

export const FavouriteAuthors = () => {
  const favAuthors = useSelector((state) => state.author.favAuthor);
  const [currentPage, setCurrentPage] = useState(1);
  function addToFavorite() {}
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <div className="author-list">
        <div className="grid-container">
          {favAuthors.map((author) => (
            <AuthorCard
              author={author}
              onClick={addToFavorite}
              isFavAuthor={true}
            />
          ))}
        </div>
      </div>
      <div>
        <Paginator
          currentPage={currentPage}
          totalPages={Math.ceil(favAuthors.length / 10)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
