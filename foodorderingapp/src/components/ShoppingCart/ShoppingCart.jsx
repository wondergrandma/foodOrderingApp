import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./ShoppingCart.module.css";

function ShoppingCart() {
  const navigate = useNavigate();

  const redirectToPaymant = () => {
    navigate("/payment");
  };

  return (
    <div>
      <button onClick={redirectToPaymant} className={styles.cartButton}>
        <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "10px" }} />
        Cart
      </button>
    </div>
  );
}

export default ShoppingCart;
