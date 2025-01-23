import styles from "./RestaurantTile.module.css";
import restaurants from "../../data/restaurants";
import { useNavigate } from "react-router-dom";

function RestaurantTile() {
  const navigate = useNavigate();
  const isPrisonMode = true;

  const goToRestaurant = (id) => {
    navigate(`/restaurant/${id}`);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function isRestaurantOpen(restaurant) {
    const today = new Date();
    const currentDay = today
      .toLocaleString("en-us", { weekday: "long" })
      .toLowerCase();
    const currentTime = today.getHours() * 100 + today.getMinutes();

    const hours = restaurant.hours[currentDay];
    if (!hours) return false;

    const [opening, closing] = hours.split("-");

    const [openingHour, openingMinute] = opening.split(":").map(Number);
    const [closingHour, closingMinute] = closing.split(":").map(Number);

    const openingTime = openingHour * 100 + openingMinute;
    const closingTime = closingHour * 100 + closingMinute;

    if (closingTime < openingTime) {
      return currentTime >= openingTime || currentTime < closingTime;
    }

    return currentTime >= openingTime && currentTime < closingTime;
  }

  function filterHighRatedRestaurants(restaurants) {
    return restaurants.filter((restaurant) => restaurant.rating > 4.5);
  }

  function filterRestaurantsExcludingTopRestaurants(restaurants) {
    return restaurants.filter((restaurant) => restaurant.rating <= 4.5);
  }

  function buildEstimateDelivery(restaurant) {
    const estimateDelivery = (
      <div className={styles.estimatDelivery}>
        <div>
          {
            restaurant.delivery[
              Math.floor(Math.random() * restaurant.delivery.length)
            ]
          }
        </div>
        <div>min</div>
      </div>
    );

    return estimateDelivery;
  }

  function buildRestaurantInfo(restaurant) {
    const restaurantInfo = (
      <div
        className={styles.backGround}
        style={{
          backgroundImage: `url(/restaurant_pictures/${getRandomNumber(
            1,
            14
          )}.avif)`,
        }}
      >
        <div className={styles.restaurantInfo}>
          <div className={styles.nameCuisineRatingContainer}>
            <div className={styles.nameCuisineContainer}>
              <div className={styles.restaurantName}>{restaurant.name}</div>
              <div className={styles.cuisineRating}>
                <div>{restaurant.cuisine + " | " + restaurant.rating}</div>
                <div className={styles.star}>&#9734;</div>
              </div>
            </div>
            <div>{buildEstimateDelivery(restaurant)}</div>
          </div>
        </div>
      </div>
    );
    return restaurantInfo;
  }

  return (
    <div className={styles.restaurantTileContainer}>
      <div>
        <h1 className={styles.top}>Top</h1>
      </div>
      <div className={styles.restaurantContainer}>
        {filterHighRatedRestaurants(restaurants).map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => goToRestaurant(restaurant.id)}
            className={`${styles.restaurant} ${
              !isRestaurantOpen(restaurant) ? styles.bars : ""
            }`}
          >
            {buildRestaurantInfo(restaurant)}
            {!isRestaurantOpen(restaurant) && (
              <div className={styles.overlay}>
                <span>Restaurant is closed</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <h1 className={styles.top}>Restaurants</h1>
      </div>
      <div className={styles.restaurantContainer}>
        {filterRestaurantsExcludingTopRestaurants(restaurants).map(
          (restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => goToRestaurant(restaurant.id)}
              className={`${styles.restaurant} ${
                !isRestaurantOpen(restaurant) ? styles.bars : ""
              }`}
            >
              {buildRestaurantInfo(restaurant)}
              {!isRestaurantOpen(restaurant) && (
                <div className={styles.overlay}>
                  <span>Restaurant is closed</span>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default RestaurantTile;
