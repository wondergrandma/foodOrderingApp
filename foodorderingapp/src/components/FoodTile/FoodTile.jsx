import styles from "./FoodTile.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../storage/CartProvider";

function FoodTile({ menu }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const showFoodDetail = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.foodTileContainer}>
      <div className={styles.foodTileContainer}>
        <div className={styles.foodTileMenu}>Menu</div>

        {menu.map((item, index) => (
          <div
            key={index}
            className={styles.foodTile}
            onClick={() => showFoodDetail(item)}
          >
            <div className={styles.foodNamePrice}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>${item.price.toFixed(2)}</p>
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles.buttonContainer}
            >
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.name)}
              >
                -
              </button>
              <div style={{ width: "10px" }}></div>
              <button
                className={styles.addButton}
                onClick={() => addToCart({ ...item, quantity: 1 })}
              >
                +
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
            <p>Price: ${selectedItem.price.toFixed(2)}</p>
            <p>Details about the food...</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodTile;
