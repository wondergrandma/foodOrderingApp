import React, { useState } from "react";
import styles from "./DeliveryDetail.module.css";

function DeliveryDetail({ onAddressSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleSave = () => {
    if (!address.street || !address.city || !address.zipCode || !address.state) {
      alert("Please fill in all address fields!");
      return;
    }
    setIsEditing(false);
    onAddressSave(address);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className={styles.deliveryDetailContainer}>
      <h3>Delivery Address</h3>
      {isEditing ? (
        <div className={styles.addressForm}>
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={address.zipCode}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button className={styles.saveButton} onClick={handleSave}>
            Save Address
          </button>
        </div>
      ) : (
        <div className={styles.addressDisplay}>
          <p>{address.street}</p>
          <p>{address.city}, {address.state} - {address.zipCode}</p>
          <button className={styles.editButton} onClick={handleEdit}>
            Edit Address
          </button>
        </div>
      )}
    </div>
  );
}

export default DeliveryDetail;
