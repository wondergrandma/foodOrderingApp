import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useAuth } from "../../authentication/AuthProvider";

const users = [
  {
    id: 1,
    username: "johnd",
    email: "johndoe@mail.com",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
  },
];

function LoginForm({ onClose }) {
  const { setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setErrorMessage("");
      onClose();
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className={styles.column} onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.row}>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
