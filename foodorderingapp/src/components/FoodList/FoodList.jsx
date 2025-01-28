import styles from "./FoodList.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../storage/CartProvider";

function FoodList({ onTotalPriceChange }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleIncrease = (item) => {
    addToCart(item);
  };

  const handleDecrease = (item) => {
    removeFromCart(item.name);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    if (onTotalPriceChange) {
      onTotalPriceChange(calculateTotalPrice());
    }
  }, [cart, onTotalPriceChange]);

  return (
    <div className={styles.foodListContainer}>
      <h1 className={styles.title}>Your Food Cart</h1>
      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty!</p>
      ) : (
        <div className={styles.foodList}>
          {cart.map((item, index) => (
            <div key={index} className={styles.foodItem}>
              <div className={styles.foodNamePrice}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>Price: ${item.price.toFixed(2)}</p>
                <span className={styles.quantity}>
                  Quantity: {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodList;
