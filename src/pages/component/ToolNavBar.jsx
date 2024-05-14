import { useSelector } from "react-redux";
export const ToolNavBar = () => {
  const favAuthors = useSelector((state) => state.author.favAuthor).length;
  return (
    <>
      <h1 className="title">Favourite Authors</h1>
      <div className="fav-count">
        <span>Total Favourite Authors: {favAuthors}</span>
      </div>
    </>
  );
};
