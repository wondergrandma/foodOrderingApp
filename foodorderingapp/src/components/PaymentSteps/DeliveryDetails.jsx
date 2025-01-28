import React from "react";
import DeliveryDetail from "../DeliveryDetails/DeliveryDetail.jsx";
import styles from "../../pages/PaymentPage.module.css";
import { toLocalDateTimeString } from "../../utils/DateUtils";

// Step 2
function DeliveryDetails({
  deliveryAddress,
  setDeliveryAddress,
  isAddressValid,
  isEditable,
  earliestTime,
  deliveryTime,
  handleDeliveryTimeChange,
  handleEarliestDelivery,
  isTimeValid
}) {
  return (
    <div>
      <h1 className={styles.stepTitle}>Step 2: Enter Delivery Details</h1>

      <DeliveryDetail
        onAddressSave={setDeliveryAddress}
        address={deliveryAddress}
        isEditable={isEditable}
      />

      {isAddressValid ? (
        <p className={styles.successMessage}>✔ Address is valid</p>
      ) : (
        <p className={styles.errorMessage}>✖ Please enter a valid address</p>
      )}

      <h3 className={styles.subTitle}>Delivery Time</h3>
      <div className={styles.deliveryTimeContainer}>
        <input
          type="datetime-local"
          value={deliveryTime}
          onChange={handleDeliveryTimeChange}
          min={toLocalDateTimeString(earliestTime)}
          disabled={!isEditable}
          className={styles.deliveryTimeInput}
        />
        <button
          className={styles.actionButton}
          onClick={handleEarliestDelivery}
          disabled={!isEditable}
        >
          Set Earliest Delivery Time
        </button>
        {isTimeValid ? (
          <p className={styles.successMessage}>✔ Delivery time is valid</p>
        ) : (
          <p className={styles.errorMessage}>
            ✖ Selected time cannot be earlier than{" "}
            {earliestTime.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default DeliveryDetails;
