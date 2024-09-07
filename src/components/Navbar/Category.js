import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <ul>
        <li>
          <Link to={"/"}>All</Link>
        </li>
        <li>
          <Link to={"/Trending"}>Trending Now</Link>
        </li>
        <li>
          <Link to={"/OldSongsMode"}>Old Songs</Link>
        </li>
        <li>
          <Link to={"/NewSongsMode"}>New Songs</Link>
        </li>
        <li>
          <Link to="/RomanticMode">Romantic Songs</Link>
        </li>
        <li>
          <Link to="">Moods & Genre</Link>
          <ul className="dropdown">
            {/* <li>
              <Link to="/RomanticMode">Romantic Songs</Link>
            </li> */}
            {/* <li>
              <Link to="/HappyMode">Happy Songs</Link>
            </li>
            <li>
              <Link to="/SadMode">Sad Songs</Link>
            </li> */}
            <li>
              <Link to="/ExcitedMood">Excited Songs</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/AlbumMode">Top Albums</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
