import { useEffect, useState } from "react";
import { Paginator } from "./component/Paginator";
import { useDispatch, useSelector } from "react-redux";
import { addFavAuthor, removeFavAuthor } from "./authorSlice";
import { AuthorCard } from "./component/AuthorCard";

export const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const favAuthors = useSelector((state) => state.author.favAuthor);
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(
          `https://api.quotable.io/authors?limit=${limit}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTotalPages(data.totalPages);
        setAuthors(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchAuthors();
    return () => {};
  }, [skip, limit]);

  const addToFavorite = (author) => {
    if (!author) return;
    if (favAuthors.filter((id) => id._id === author._id).length > 0) {
      dispatch(removeFavAuthor(author._id));
    } else {
      dispatch(addFavAuthor([...favAuthors, author]));
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSkip((page - 1) * limit);
    setLoading(true);
  };
  return (
    <>
      <div className="author-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid-container">
            {authors.map((author) => (
              <AuthorCard
                author={author}
                onClick={addToFavorite}
                isFavAuthor={
                  favAuthors.filter((id) => id._id === author._id).length > 0
                }
              />
            ))}
          </div>
        )}
      </div>
      <div>
        {!loading && (
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};
