import { useParams, useNavigate } from "react-router-dom";
import restaurants from "../data/restaurants";
import Header from "../components/Header/Header";
import RestaurantDetail from "../components/RestaurantDetail/RestaurantDetail";
import FoodTile from "../components/FoodTile/FoodTile";
import styles from "./RestaurantPage.module.css";
import FoodList from "../components/FoodList/FoodList";
import Footer from "../components/Footer/Footer";

function RestaurantPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handlePayRedirect = () => {
    navigate("/payment");
  };

  return (
    <>
      <Header />
      <div className={styles.restaurantPageContainer}>
        <div className={styles.foodListSection}>
          <FoodList />
          <button className={`${styles.payButton}`} onClick={handlePayRedirect}>
            Go to Cart
          </button>
        </div>
        <FoodTile menu={restaurant.menu} />
        <RestaurantDetail restaurant={restaurant} />
      </div>
      <Footer />
    </>
  );
}

export default RestaurantPage;
