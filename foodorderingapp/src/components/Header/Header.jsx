import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Location from "../Location/Location";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { CartContext } from "../../storage/CartProvider";
import { useContext } from "react";

function Header() {
  const navigate = useNavigate();
  const redirectToHomepage = () => {
    navigate("/");
  };
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p
            className={`${styles.titleText} ${styles.unselectable}`}
            onClick={redirectToHomepage}
          >
            Foodie
          </p>
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
          <Location></Location>
        </div>
        <div>
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
      <div className={styles.burgerMenu}>
        <BurgerMenu></BurgerMenu>
      </div>
    </div>
  );
}

export default Header;
