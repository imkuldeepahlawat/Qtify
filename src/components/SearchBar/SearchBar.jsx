import "./SearchBar.css";
import searchIcon from "../../Assets/Search icon.png";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search an album of your choice" />
      <a className="">
        <div className="searchImage">
          <img src={searchIcon} alt="search Icon" />
        </div>
      </a>
    </div>
  );
};

export default SearchBar;