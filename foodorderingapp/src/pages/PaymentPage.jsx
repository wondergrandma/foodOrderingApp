import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import DeliveryDetail from "../components/DeliveryDetails/DeliveryDetail";
import FoodList from "../components/FoodList/FoodList";
import { CartContext } from "../storage/CartProvider";
import styles from "./PaymentPage.module.css";

function PaymentPage() {
  const { cart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [earliestTime, setEarliestTime] = useState(() => {
    const soonestTime = new Date();
    soonestTime.setMinutes(soonestTime.getMinutes() + 85);
    return soonestTime;
  });
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    setIsAddressValid(!!deliveryAddress);
  }, [deliveryAddress]);

  useEffect(() => {
    if (deliveryTime) {
      const selectedTime = new Date(deliveryTime);
      setIsTimeValid(selectedTime >= earliestTime);
    } else {
      setIsTimeValid(false);
    }
  }, [deliveryTime, earliestTime]);

  const handleDeliveryTimeChange = (e) => {
    setDeliveryTime(e.target.value);
    const selectedTime = new Date(e.target.value - 1);
    if (selectedTime < earliestTime) {
      setIsTimeValid(false);
    } else {
      setIsTimeValid(true);
    }
  };

  const handleEarliestDelivery = () => {
    const formattedTime = earliestTime.toISOString().slice(0, 16);
    setDeliveryTime(formattedTime);
    setIsTimeValid(true);
  };

  const handleNext = () => {
    if (currentStep === 1 && cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (currentStep === 2 && (!isAddressValid || !isTimeValid)) {
      alert("Please ensure the delivery details are complete and valid!");
      return;
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setShowThanks(true);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className={styles.paymentPageContainer}>
        <div className={styles.navigationButtons}>
          <button
            className={styles.navigationButton}
            onClick={handlePrevious}
            disabled={currentStep === 1 || isProcessing}
          >
            &#8592; Back
          </button>
          <div className={styles.stepIndicator}>
            {[1, 2, 3].map((step) => (
              <span
                key={step}
                className={`${styles.stepDot} ${
                  step <= currentStep ? styles.activeStep : ""
                }`}
              ></span>
            ))}
          </div>
          <button
            className={styles.navigationButton}
            onClick={handleNext}
            disabled={currentStep === 3 || (currentStep === 2 && (!isAddressValid || !isTimeValid))}
          >
            Next &#8594;
          </button>
        </div>

        {currentStep === 1 && (
          <div>
            <h1 className={styles.stepTitle}>Step 1: Review Your Cart</h1>
            <FoodList />
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h1 className={styles.stepTitle}>Step 2: Enter Delivery Details</h1>
            <DeliveryDetail onAddressSave={setDeliveryAddress} />
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
                className={styles.deliveryTimeInput}
                min={earliestTime.toISOString().slice(0, 16)}
              />
              <button
                className={styles.actionButton}
                onClick={handleEarliestDelivery}
              >
                Set Earliest Delivery Time
              </button>
              {isTimeValid ? (
                <p className={styles.successMessage}>✔ Delivery time is valid</p>
              ) : (
                <p className={styles.errorMessage}>
                  ✖ Selected time cannot be earlier than {earliestTime.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}

        {currentStep === 3 && (
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
            <FoodList />
            <button
              className={styles.actionButton}
              onClick={handlePay}
              disabled={isProcessing}
            >
              Pay
            </button>
            {isProcessing && (
              <div className={styles.deliveringDialog}>
                Processing...
              </div>
            )}
            {showThanks && (
              <div className={styles.thankYouDialog}>
                Thank you for your order!
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PaymentPage;
