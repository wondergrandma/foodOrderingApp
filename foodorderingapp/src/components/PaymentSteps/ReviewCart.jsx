import React from "react";
import FoodList from "../FoodList/FoodList";
import styles from "../../pages/PaymentPage.module.css";

// Step 1
function ReviewCart({ cart }) {
  return (
    <div>
      <h1 className={styles.stepTitle}>Step 1: Review Your Cart</h1>
      {cart.length === 0 ? (
        <p className={styles.errorMessage}>
          Your cart is empty. Please add items to proceed.
        </p>
      ) : (
        <FoodList />
      )}
    </div>
  );
}

export default ReviewCart;
