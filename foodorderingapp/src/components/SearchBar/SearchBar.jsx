import { useState } from "react";
import restaurants from "../../data/restaurants";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch, onSearchClick }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setInput(searchTerm);

    const filtered = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.menu.some((item) =>
          item.name.toLowerCase().includes(searchTerm)
        )
    );

    if (onSearch) {
      onSearch(filtered);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <img
        src="/square_search.png"
        className={styles.searchIcon}
        alt="Search Icon"
      ></img>
      <input
        placeholder="Search for restaurant or food..."
        value={input}
        onChange={(e) => handleSearch(e)}
        onClick={onSearchClick}
      />
    </div>
  );
}

export default SearchBar;
