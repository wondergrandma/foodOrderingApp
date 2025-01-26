import { useParams, useNavigate } from "react-router-dom";
import restaurants from "../data/restaurants";
import Header from "../components/Header/Header";
import RestaurantDetail from "../components/RestaurantDetail/RestaurantDetail";
import FoodTile from "../components/FoodTile/FoodTile";
import styles from "./RestaurantPage.module.css";
import FoodList from "../components/FoodList/FoodList";

function RestaurantPage() {
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

  return (
    <>
      <Header />
      <div className={styles.restaurantPageContainer}>
        <div className={styles.backArrowContainer}>
          <button className={styles.backArrow} onClick={handleBack}>
            &#8592; Back
          </button>
        </div>
        <div className={styles.foodListSection}>
          <FoodList />
          <button className={`${styles.payButton}`} onClick={handlePayRedirect}>
            Go to Cart
          </button>
        </div>
        <FoodTile menu={restaurant.menu} />
        <RestaurantDetail restaurant={restaurant} />
      </div>
    </>
  );
}

export default RestaurantPage;
