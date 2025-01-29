import React, { useState } from "react";
import FoodList from "../FoodList/FoodList";
import styles from "../../pages/PaymentPage.module.css";

// Step 1
function ReviewCart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 4.5;
  const serivceFee = cart.length / 10;
  const totalPricewithFees = totalPrice + deliveryFee + serivceFee;

  const handleTotalPriceChange = (newTotal) => {
    setTotalPrice(newTotal);
  };

  return (
    <div className={styles.background}>
      <h1 className={styles.stepTitle}>Step 1: Review Your Cart</h1>
      {cart.length === 0 ? (
        <p className={styles.errorMessage}>
          Your cart is empty. Please add items to proceed.
        </p>
      ) : (
        <div>
          <FoodList onTotalPriceChange={handleTotalPriceChange} />
          <p className={styles.feePrice}>Delivery fee: ${deliveryFee}</p>
          <p className={styles.feePrice}>Service fee: ${serivceFee}</p>
          <div className={styles.lineHorizontal}></div>
          <p className={styles.totalPrice}>
            Total Price: ${totalPricewithFees.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default ReviewCart;
