import { useEffect, useState } from "react";
import { Paginator } from "./component/Paginator";
import { ReactComponent as FavoriteIcon } from "../asset/favregular.svg";
import { ReactComponent as FavoriteYellowIcon } from "../asset/favyellow.svg";

export const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [favAuthors, setFavAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Function to fetch data from the API
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

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const addToFavorite = (author) => {
    console.log(author);
    if (favAuthors.filter((id) => id._id === author._id).length > 0) {
      // If author is already in favorites, remove from favorites
      setFavAuthors(favAuthors.filter((id) => id._id !== author._id));
    } else {
      // If author is not in favorites, add to favorites
      setFavAuthors([...favAuthors, author]);
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
              <div key={author._id} className="card">
                <div
                  className="favorite-btn"
                  onClick={() => addToFavorite(author)}
                >
                  {favAuthors.filter((id) => id._id === author._id).length ===
                  0 ? (
                    <FavoriteIcon className="image-icon" />
                  ) : (
                    <FavoriteYellowIcon />
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
