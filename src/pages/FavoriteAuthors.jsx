// import { useState } from "react";
// import { Paginator } from "./component/Paginator";
import { useSelector } from "react-redux";
import { AuthorCard } from "./component/AuthorCard";
import { useDispatch } from "react-redux";
import { addFavAuthor, removeFavAuthor } from "./authorSlice";

export const FavouriteAuthors = () => {
  const dispatch = useDispatch();
  const favAuthors = useSelector((state) => state.author.favAuthor);

  const toggleFavorite = (author) => {
    if (!author) return;
    dispatch(removeFavAuthor(author._id));
  };

  return (
    <>
      <div className="author-list">
        <div className="grid-container">
          {favAuthors.map((author) => (
            <AuthorCard
              author={author}
              onClick={toggleFavorite}
              isFavAuthor={true}
            />
          ))}
        </div>
      </div>
      {/* <div>
        <Paginator
          currentPage={currentPage}
          totalPages={Math.ceil(favAuthors.length / 10)}
          onPageChange={handlePageChange}
        />
      </div> */}
    </>
  );
};
