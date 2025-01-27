import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import restaurants from "../data/restaurants";
import Header from "../components/Header/Header";
import RestaurantDetail from "../components/RestaurantDetail/RestaurantDetail";
import FoodTile from "../components/FoodTile/FoodTile";
import styles from "./RestaurantPage.module.css";
import FoodList from "../components/FoodList/FoodList";

function RestaurantPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  const handlePayRedirect = () => {
    navigate("/payment");
  };

  const handleTotalPriceChange = (newTotal) => {
    setTotalPrice(newTotal);
  };

  return (
    <>
      <Header />
      <div style={{ height: "45px" }}></div>
      <div className={styles.restaurantPageContainer}>
        <div className={styles.backArrowContainer}>
          <button className={styles.backArrow} onClick={handleBack}>
            &#8592; Back
          </button>
        </div>
        <RestaurantDetail restaurant={restaurant} />
        <div className={styles.line}></div>
        <FoodTile menu={restaurant.menu} />
        <div className={styles.line}></div>
        <div className={styles.foodListSection}>
          <FoodList onTotalPriceChange={handleTotalPriceChange} />
          <div className={styles.row}>
            <div className={styles.lineHorizontal}></div>
            <p className={styles.totalPrice}>
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button
              className={`${styles.payButton}`}
              onClick={handlePayRedirect}
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantPage;
