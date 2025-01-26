import styles from "./Header.module.css";
import Location from "../Location/Location";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../storage/CartProvider";
import { useContext, useState } from "react";
import restaurants from "../../data/restaurants";
import { useAuth } from "../../authentication/AuthProvider";
import LoginForm from "../AuthForm/LoginForm";
import RegisterForm from "../AuthForm/RegisterForm";

function Header({ onSearch }) {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [currentForm, setCurrentForm] = useState(null);
  const { cart } = useContext(CartContext);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const redirectToHomepage = () => {
    navigate("/");
  };

  const goToRestaurant = (id) => {
    navigate(`/restaurant/${id}`);
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
    setIsSearchExpanded(true);
  };

  const closeSearch = () => {
    setIsSearchExpanded(false);
  };

  const showLoginForm = () => {
    setCurrentForm("login");
  };

  const showRegisterForm = () => {
    setCurrentForm("register");
  };

  const closeForm = () => {
    setCurrentForm(null);
  };

  function getLowestPrice(restaurant) {
    const lowestPrice = Math.min(...restaurant.menu.map((item) => item.price));
    return lowestPrice;
  }

  return (
    <div className={styles.headerContainer}>
      {isSearchExpanded && (
        <div className={styles.shadowOverlay} onClick={closeSearch}></div>
      )}

      {currentForm && (
        <div className={styles.formOverlay} onClick={closeForm}>
          <div
            className={styles.formContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {currentForm === "login" && <LoginForm onClose={closeForm} />}
            {currentForm === "register" && <RegisterForm onClose={closeForm} />}
          </div>
        </div>
      )}

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
          <div className={styles.searchBarWrapper}>
            {isLoggedIn && (
              <SearchBar
                onSearch={updateFilteredRestaurants}
                onSearchClick={handleSearchClick}
              />
            )}
            {isSearchExpanded && (
              <button className={styles.closeButton} onClick={closeSearch}>
                ✖
              </button>
            )}
          </div>
          {isSearchExpanded && filteredRestaurants.length > 0 && (
            <div className={styles.restaurantListWrapper}>
              <div className={styles.restaurantList}>
                {filteredRestaurants.map((restaurant, index) => (
                  <div key={index} className={styles.restaurantItem}>
                    <div
                      className={styles.concreteRestaurantTile}
                      onClick={() => goToRestaurant(restaurant.id)}
                    >
                      <div className={styles.row}>
                        <div>{restaurant.name}</div>|
                        <div className={styles.row}>
                          <div>{restaurant.rating} </div>
                          <div className={styles.star}>&#9733;</div>
                        </div>
                      </div>
                      <div>Food from: {getLowestPrice(restaurant)} kč</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {!isSearchExpanded && (
          <div className={styles.menuItems}>
            <div>
              <ul>
                {isLoggedIn ? (
                  <>
                    <li>
                      <div
                        className={styles.menuItemsStyle}
                        onClick={redirectToHomepage}
                      >
                        {getTotalOrders()} Cart
                      </div>
                    </li>
                    <li>
                      <div className={styles.menuItemsStyle}>Menu</div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <button
                        className={styles.authButton}
                        onClick={showLoginForm}
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        className={styles.authButton}
                        onClick={showRegisterForm}
                      >
                        Register
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
