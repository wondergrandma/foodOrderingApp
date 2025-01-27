import React, { useContext, useState, useEffect } from "react";

import Header from "../components/Header/Header";
import StepperNavigation from "../components/PaymentSteps/StepperNavigation";
import ReviewCart from "../components/PaymentSteps/ReviewCart";
import DeliveryDetails from "../components/PaymentSteps/DeliveryDetails";
import ReviewAndComplete from "../components/PaymentSteps/ReviewAndComplete";

import { CartContext } from "../storage/CartProvider";

import styles from "./PaymentPage.module.css";

import { toLocalDateTimeString } from "../utils/DateUtils";

function PaymentPage() {
  const { cart, clearCart } = useContext(CartContext);

  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [earliestTime, setEarliestTime] = useState(() => {
    const soonestTime = new Date();
    soonestTime.setMinutes(soonestTime.getMinutes() + 25);
    soonestTime.setSeconds(0);
    soonestTime.setMilliseconds(0);
    return soonestTime;
  });

  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [orderSummary, setOrderSummary] = useState([]);

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
    if (!isEditable) return;
    setDeliveryTime(e.target.value);
  };

  const handleEarliestDelivery = () => {
    if (!isEditable) return;
    const localString = toLocalDateTimeString(earliestTime);
    setDeliveryTime(localString);
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setOrderSummary(cart);
      clearCart();
      setShowThanks(true);
      setIsProcessing(false);
      setIsEditable(false);
    }, 3000);
  };

  const isNextButtonDisabled = () => {
    if (currentStep === 1 && cart.length === 0) return true;
    if (currentStep === 2 && (!isAddressValid || !isTimeValid)) return true;
    if (currentStep === 3) return true;
    return false;
  };

  return (
    <>
      <Header />
      
      <div className={styles.paymentPageContainer}>
        <StepperNavigation
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          isProcessing={isProcessing}
          isEditable={isEditable}
          isNextButtonDisabled={isNextButtonDisabled}
        />

        {currentStep === 1 && <ReviewCart cart={cart} />}
        
        {currentStep === 2 && (
          <DeliveryDetails
            deliveryAddress={deliveryAddress}
            setDeliveryAddress={setDeliveryAddress}
            isAddressValid={isAddressValid}
            isEditable={isEditable}
            earliestTime={earliestTime}
            deliveryTime={deliveryTime}
            handleDeliveryTimeChange={handleDeliveryTimeChange}
            handleEarliestDelivery={handleEarliestDelivery}
            isTimeValid={isTimeValid}
          />
        )}
        
        {currentStep === 3 && (
          <ReviewAndComplete
            deliveryAddress={deliveryAddress}
            deliveryTime={deliveryTime}
            orderSummary={orderSummary}
            cart={cart}
            handlePay={handlePay}
            isProcessing={isProcessing}
            showThanks={showThanks}
          />
        )}
      </div>
    </>
  );
}

export default PaymentPage;
