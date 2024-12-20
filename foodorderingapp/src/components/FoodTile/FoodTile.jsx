import styles from "./FoodTile.module.css";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../storage/CartProvider";

function FoodTile(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const showFoodDetail = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className={styles.foodTileContainer}>
        {props.menu.map((item, index) => (
          <div
            key={index}
            className={styles.foodTile}
            onClick={() => showFoodDetail(item)}
          >
            <div className={styles.foodNamePrice}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>${item.price}</p>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={styles.buttonContainer}
            >
              <button
                className={styles.addButton}
                onClick={() =>
                  addToCart({
                    name: item.name,
                    price: item.price,
                  })
                }
              >
                +
              </button>
              <div style={{ width: "10px" }}></div>
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.name)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedItem.name}</h2>
            <p>Price: ${selectedItem.price}</p>
            <p>Details about the food...</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default FoodTile;
