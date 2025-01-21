import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Location from "../Location/Location";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { CartContext } from "../../storage/CartProvider";
import { useContext } from "react";

function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const redirectToHomepage = () => {
    navigate("/");
  };

  const redirectToPaymant = () => {
    navigate("/payment");
  };

  const getTotalOrders = () => {
    return cart.reduce((total, item) => total + item.quantity, null);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>
            <p
              className={`${styles.titleText} ${styles.unselectable}`}
              onClick={redirectToHomepage}
            >
              Foodie
            </p>
          </div>
          <Location></Location>
        </div>
        <div className={styles.centerContainer}>
          <div className={styles.searchContainer}>
            <img
              src="/square_search.png"
              className={styles.searchIcon}
              alt="Search Icon"
            ></img>
            <input
              type="text"
              placeholder="Search for food ..."
              className={styles.search}
            ></input>
          </div>
        </div>
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
            <li>
              <div className={styles.menuItemsStyle}>Search</div>
            </li>
            <li>
              <div className={styles.menuItemsStyle}>Menu</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
