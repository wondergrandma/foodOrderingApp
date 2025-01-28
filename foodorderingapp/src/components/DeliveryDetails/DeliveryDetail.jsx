import React, { useState } from "react";
import styles from "./DeliveryDetail.module.css";

function DeliveryDetail({ onAddressSave, address, isEditable }) {
  const [isEditing, setIsEditing] = useState(true);
  const [currentAddress, setCurrentAddress] = useState(
    address || {
      street: "",
      city: "",
      zipCode: "",
      state: "",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleSave = () => {
    if (!currentAddress.street || !currentAddress.city || !currentAddress.zipCode || !currentAddress.state) {
      alert("Please fill in all address fields!");
      return;
    }
    setIsEditing(false);
    onAddressSave(currentAddress);
  };

  return (
    <div className={styles.deliveryDetailContainer}>
      <h3>Delivery Address</h3>
      {isEditable && isEditing ? (
        <div className={styles.addressForm}>
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={currentAddress.street}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!isEditable}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={currentAddress.city}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!isEditable}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={currentAddress.zipCode}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!isEditable}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={currentAddress.state}
            onChange={handleInputChange}
            className={styles.input}
            disabled={!isEditable}
          />
          <button
            className={styles.actionButton}
            onClick={handleSave}
            disabled={!isEditable}
          >
            Save Address
          </button>
        </div>
      ) : (
        <div className={styles.addressDisplay}>
          <p>{currentAddress.street}</p>
          <p>
            {currentAddress.city}, {currentAddress.state} - {currentAddress.zipCode}
          </p>
        </div>
      )}
    </div>
  );
}

export default DeliveryDetail;
