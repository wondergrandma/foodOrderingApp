import styles from "./FoodTile.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../storage/CartProvider";

function FoodTile({ menu }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAllergens, setShowAllergens] = useState(false);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const showFoodDetail = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setShowAllergens(false);
  };

  const showAllergensModal = () => {
    setShowAllergens(true);
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
              <div className={styles.column}>
                <p className={styles.name}>{item.name}</p>
                <div
                  className={styles.floatingDiv}
                  onClick={showAllergensModal}
                >
                  Alergens: 1, 2, 3
                </div>
              </div>
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

      {showAllergens && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Allergens Information</h2>
            <div>
              <div>1. Eggs</div>
              <div>2. Peanuts</div>
              <div>3. Tree nuts</div>
              <div>4. Soy</div>
              <div>5. Wheat</div>
              <div>6. Fish</div>
              <div>7. Shellfish</div>
              <div>8. Sesame seeds</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodTile;
