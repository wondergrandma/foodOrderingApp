import { useState } from "react";
import styles from "./RegisterForm.module.css";
import { useAuth } from "../../authentication/AuthProvider";

function RegisterForm() {
  const { isLoggedIn } = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate registration logic here
    setIsRegistered(true);
  };

  return (
    <div>
      <h2>Register</h2>
      <form className={styles.column} onSubmit={handleSubmit}>
        {!isRegistered && (
          <>
            <label>Email:</label>
            <input type="email" className={styles.input} required />
            <div className={styles.row}>
              <button type="submit" className={styles.button}>
                Register
              </button>
            </div>
          </>
        )}
      </form>
      {isRegistered && (
        <p className={styles.successMessage}>
          Registration email was sent to your email address!
        </p>
      )}
    </div>
  );
}

export default RegisterForm;
