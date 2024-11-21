import { motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";

function burgerMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <MotionConfig>
        <motion.button
          onClick={() => setActive((pv) => !pv)}
          className={styles.button}
          animate={active ? "open" : "closed"}
        >
          <motion.span
            style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
            className={styles.buttonLine}
            variants={{
              open: {
                rotate: "45deg",
                top: ["35%", "50%", "50%"],
              },
              closeed: {
                rotate: "0deg",
                top: ["50%", "50%", "35%"],
              },
            }}
          ></motion.span>
          <motion.span
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            className={styles.buttonLine}
            variants={{
              open: {
                rotate: "-45deg",
              },
              closeed: {
                rotate: "0deg",
              },
            }}
          ></motion.span>
          <motion.span
            style={{ left: "50%", bottom: "35%", x: "-50%", y: "50%" }}
            className={styles.buttonLine}
            variants={{
              open: {
                rotate: "45deg",
                left: "50%",
                bottom: ["35%", "50%", "50%"],
              },
              closeed: {
                rotate: "0deg",
                top: ["50%", "50%", "35%"],
                left: "50%",
              },
            }}
          ></motion.span>
        </motion.button>
      </MotionConfig>
    </>
  );
}

export default burgerMenu;
