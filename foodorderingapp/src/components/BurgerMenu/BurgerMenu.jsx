import { motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setActive(false);
  };

  return (
    <>
      <MotionConfig>
        <div className={styles.burgerMenuContainer}>
          <motion.button
            onClick={() => setActive((prev) => !prev)}
            className={styles.button}
            animate={active ? "open" : "closed"}
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className={styles.buttonLine}
              variants={{
                open: {
                  rotate: "45deg",
                  top: "50%",
                },
                closed: {
                  rotate: "0deg",
                  top: "35%",
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              className={styles.buttonLine}
              variants={{
                open: {
                  opacity: 0,
                },
                closed: {
                  opacity: 1,
                },
              }}
            ></motion.span>
            <motion.span
              style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
              className={styles.buttonLine}
              variants={{
                open: {
                  rotate: "-45deg",
                  bottom: "50%",
                },
                closed: {
                  rotate: "0deg",
                  bottom: "35%",
                },
              }}
            ></motion.span>
          </motion.button>

          {active && (
            <motion.div
              className={styles.menu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ul className={styles.menuList}>
                <li
                  className={styles.menuItem}
                  onClick={() => handleNavigation("/")}
                >
                  Homepage
                </li>
                <li
                  className={styles.menuItem}
                  onClick={() => handleNavigation("/about")}
                >
                  About
                </li>
                <li
                  className={styles.menuItem}
                  onClick={() => handleNavigation("/payment")}
                >
                  Cart
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </MotionConfig>
    </>
  );
}

export default BurgerMenu;
