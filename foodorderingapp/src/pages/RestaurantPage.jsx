import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";
import Header from "../components/Header/Header";
import RestaurantDetail from "../components/RestaurantDetail/RestaurantDetail";
import FoodTile from "../components/FoodTile/FoodTile";
import styles from "./RestaurantPage.module.css";
import FoodList from "../components/FoodList/FoodList";
import Footer from "../components/Footer/Footer";

function RestaurantPage() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      <Header></Header>
      <div className={styles.restaurantPageContainer}>
        <FoodList></FoodList>
        <FoodTile menu={restaurant.menu}></FoodTile>
        <RestaurantDetail restaurant={restaurant}></RestaurantDetail>
      </div>
      <Footer></Footer>
    </>
  );
}

export default RestaurantPage;
