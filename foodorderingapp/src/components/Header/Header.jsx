import styles from "./Header.module.css";
import Location from "../Location/Location";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../storage/CartProvider";
import { useContext, useState } from "react";
import restaurants from "../../data/restaurants";

function Header({ onSearch }) {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const redirectToHomepage = () => {
    navigate("/");
  };

  const redirectToPaymant = () => {
    navigate("/payment");
  };

  const getTotalOrders = () => {
    return cart.reduce((total, item) => total + item.quantity, "");
  };

  const updateFilteredRestaurants = (data) => {
    setFilteredRestaurants(data);
    if (onSearch) {
      onSearch(data);
    }
  };

  const handleSearchClick = () => {
    setIsSearchExpanded((prev) => !prev);
  };

  return (
    <div
      className={`${styles.headerRow} ${
        isSearchExpanded ? styles.expanded : ""
      }`}
    >
      {!isSearchExpanded && (
        <div className={styles.titleLocation}>
          <p
            className={`${styles.titleText} ${styles.unselectable}`}
            onClick={redirectToHomepage}
          >
            Foodie
          </p>
          <Location />
        </div>
      )}
      <div className={styles.searchColumn}>
        <SearchBar
          onSearch={updateFilteredRestaurants}
          onSearchClick={handleSearchClick}
        />
        {isSearchExpanded && filteredRestaurants.length > 0 && (
          <div className={styles.restaurantList}>
            <ul>
              {filteredRestaurants.map((restaurant, index) => (
                <li key={index}>{restaurant.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {!isSearchExpanded && (
        <div className={styles.menuItems}>
          <div>
            <ul>
              <li>
                <div
                  className={styles.menuItemsStyle}
                  onClick={redirectToPaymant}
                >
                  {getTotalOrders()} Cart
                </div>
              </li>
              <li></li>
              <li>
                <div className={styles.menuItemsStyle}>Menu</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
