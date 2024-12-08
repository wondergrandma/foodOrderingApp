import styles from "./FoodList.module.css";
import { useContext } from "react";
import { CartContext } from "../../storage/CartProvider";

function FoodList() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleIncrease = (item) => {
    addToCart(item);
  };

  const handleDecrease = (item) => {
    removeFromCart(item.name);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

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
                <span className={styles.quantity}>Quantity: {item.quantity}</span>
              </div>
            </div>
          ))}
          <p className={styles.totalPrice}>Total: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
}

export default FoodList;
