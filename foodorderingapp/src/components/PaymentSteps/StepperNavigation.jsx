import React from "react";
import styles from "../../pages/PaymentPage.module.css";

function StepperNavigation({
  currentStep,
  setCurrentStep,
  isProcessing,
  isEditable,
  isNextButtonDisabled,
}) {
  return (
    <div className={styles.navigationButtons}>
      <button
        className={styles.navigationButton}
        onClick={() => setCurrentStep((prevStep) => Math.max(1, prevStep - 1))}
        disabled={currentStep === 1 || isProcessing || !isEditable}
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
        onClick={() => setCurrentStep((prevStep) => Math.min(3, prevStep + 1))}
        disabled={isNextButtonDisabled() || !isEditable}
      >
        Next &#8594;
      </button>
    </div>
  );
}

export default StepperNavigation;
