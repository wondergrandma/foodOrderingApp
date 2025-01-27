import React, { useState } from "react";
import FoodList from "../FoodList/FoodList";
import styles from "../../pages/PaymentPage.module.css";

// Step 1
function ReviewCart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPriceChange = (newTotal) => {
    setTotalPrice(newTotal);
  };

  return (
    <div>
      <h1 className={styles.stepTitle}>Step 1: Review Your Cart</h1>
      {cart.length === 0 ? (
        <p className={styles.errorMessage}>
          Your cart is empty. Please add items to proceed.
        </p>
      ) : (
        <div>
          <FoodList onTotalPriceChange={handleTotalPriceChange} />
          <div className={styles.lineHorizontal}></div>
          <p className={styles.totalPrice}>
            Total Price: ${totalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default ReviewCart;
