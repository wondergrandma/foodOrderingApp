import styles from "./RestaurantTile.module.css";
import restaurants from "../../data/restaurants";
import { useNavigate } from "react-router-dom";

function RestaurantTile() {
  const navigate = useNavigate();

  const goToRestaurant = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className={styles.restaurantTileContainer}>
      <div>
        <h1 className={styles.top}>Top</h1>
      </div>
      <div className={styles.restaurantContainer}>
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => goToRestaurant(restaurant.id)}
            className={styles.restaurant}
          >
            {restaurant.name}
          </div>
        ))}
      </div>
      <div>
        <h1 className={styles.top}>Restaurants</h1>
      </div>
      <div className={styles.restaurantContainer}>
        {restaurants.map((restaurant) => (
          <div className={styles.restaurant}>{restaurant.name}</div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantTile;
