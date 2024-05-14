import './App.css';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { AuthorList } from './pages/AuthorList';
import { FavouriteAuthors } from './pages/FavoriteAuthors';
import { ToolNavBar } from './pages/component/ToolNavBar';

function App() {
  return (
  <BrowserRouter>
  <div className="content">
  <div className="toolbar">
      <ToolNavBar/>
  </div>
  <div className="nav">
    <a href="/AuthorList" className="block">
      <Link to="/AuthorList">Author List</Link>
    </a>
    <a href="/FavouriteAuthors" className="block">
      <Link to="/FavouriteAuthors">Fav Author List</Link>
    </a>
  </div>

  <div className="main">
      <Routes>
        <Route path="/" element={<AuthorList />}/>
        <Route path="/AuthorList" element={<AuthorList/>}/>
        <Route path="/FavouriteAuthors" element={<FavouriteAuthors/>}/>
      </Routes>
  </div>

</div>
</BrowserRouter>

  );
}

export default App;
