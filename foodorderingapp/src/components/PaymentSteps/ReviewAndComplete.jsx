import React from "react";
import styles from "../../pages/PaymentPage.module.css";

// Step 3
function ReviewAndComplete({
  deliveryAddress,
  deliveryTime,
  orderSummary,
  cart,
  handlePay,
  isProcessing,
  showThanks,
}) {
  const finalOrderList = orderSummary.length > 0 ? orderSummary : cart;

  return (
    <div>
      <h1 className={styles.stepTitle}>Step 3: Review & Complete Order</h1>
      
      <h3 className={styles.subTitle}>Delivery Address</h3>
      <p>
        {deliveryAddress
          ? `${deliveryAddress.street}, ${deliveryAddress.city}, ${deliveryAddress.state} - ${deliveryAddress.zipCode}`
          : "No address provided."}
      </p>

      <h3 className={styles.subTitle}>Delivery Time</h3>
      <p>{deliveryTime || "No time selected."}</p>

      <h3 className={styles.subTitle}>Your Order</h3>
      <ul>
        {finalOrderList.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>

      <button
        className={`${styles.actionButton} ${
          isProcessing || showThanks ? styles.disabledButton : ""
        }`}
        onClick={handlePay}
        disabled={isProcessing || showThanks}
        style={{
          border: showThanks || isProcessing ? "2px solid #f06406" : "",
          backgroundColor: showThanks || isProcessing ? "#e5d9c5" : "#f06406",
          color: showThanks || isProcessing ? "#f06406" : "white",
          cursor: showThanks || isProcessing ? "not-allowed" : "pointer",
        }}
      >
        {isProcessing
          ? "Processing..."
          : showThanks
          ? "Order is being delivered"
          : "Pay"}
      </button>
    </div>
  );
}

export default ReviewAndComplete;
