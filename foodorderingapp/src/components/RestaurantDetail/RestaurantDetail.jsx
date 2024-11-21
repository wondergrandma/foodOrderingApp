import styles from "./Restaurant.module.css";

function RestaurantDetail(props) {
  return (
    <div>
      <div className={styles.restaurant}>
        <h1>{props.restaurant.name}</h1>
        <div className={styles.line}></div>
        <div className={styles.cuisineRow}>
          <span>Cuisine:</span>
          <h2>{props.restaurant.cuisine}</h2>
        </div>
        <div className={styles.cuisineRow}>
          <span>Rating: </span>
          <h2>{props.restaurant.rating}/5</h2>
        </div>
        <div className={styles.line}></div>
        <div>
          <h2>About Us</h2>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            metus eros, elementum ut varius vel, tristique vel purus. Duis
            blandit molestie lorem sit amet tristique. Vestibulum ut risus eget
            lacus tincidunt ullamcorper quis at lectus. Vestibulum sed bibendum
            ligula. Proin dignissim imperdiet augue, ut sollicitudin metus
            molestie ut. Sed eu ante eu nisl ullamcorper ullamcorper et sit amet
            ex. Praesent posuere enim sed metus rhoncus facilisis. Aliquam vel
            nisl dignissim, efficitur elit ut, tincidunt augue. Mauris fringilla
            lobortis enim. Vestibulum at porta elit. Donec sed nulla tristique
            elit accumsan auctor et vitae sapien. Mauris et bibendum nulla.
            Mauris efficitur, magna id malesuada fermentum, nunc turpis
            ultricies dolor, et fermentum velit dolor euismod tortor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetail;
