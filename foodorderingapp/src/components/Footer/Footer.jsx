import styles from "./Footer.module.css";

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className={styles.footer}>
        <div>© {getYear()} Foodie</div>
      </footer>
    </>
  );
}

export default Footer;
