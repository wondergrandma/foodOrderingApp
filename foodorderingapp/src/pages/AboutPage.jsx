import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./AboutPage.module.css";

function About() {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
        <h1>About Us</h1>
        <p>
          Welcome to Foodie! We're passionate about delivering delicious meals
          right to your doorstep. Our mission is to connect you with your
          favorite restaurants and help you discover new culinary delights.
        </p>
        <p>
          Whether you're craving comfort food, trying something new, or looking
          for healthy options, we've got you covered.
        </p>
        <p>Thank you for choosing Foodie!</p>
      </div>
    </>
  );
}

export default About;
