import styles from "./RegisterForm.module.css";
import { useAuth } from "../../authentication/AuthProvider";

function RegisterForm() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h2>Register</h2>
      <form className={styles.column}>
        <label>Email:</label>
        <input type="email" className={styles.input} required />
        <label>Password:</label>
        <input type="password" className={styles.input} required />
        <div className={styles.row}>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
