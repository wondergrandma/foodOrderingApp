import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DeliveryDetail from "../components/DeliveryDetails/DeliveryDetail";
import styles from "./PaymentPage.module.css";
import FoodTile from "../components/FoodTile/FoodTile";
import FoodList from "../components/FoodList/FoodList";
import { CartContext } from "../storage/CartProvider";
import { useContext, useState } from "react";

function PaymentPage() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [isAsap, setIsAsap] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleDeliveryTimeChange = (e) => {
    setDeliveryTime(e.target.value);
    setIsAsap(false);
  };

  const handleAsapToggle = () => {
    setIsAsap((prevIsAsap) => !prevIsAsap);
    if (isAsap) {
      setDeliveryTime("");
    }
  };

  const handlePay = () => {
    if (!deliveryAddress) {
      alert("Please save your delivery address first!");
      return;
    }
    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className={styles.paymentPageContainer}>
        <div>
          <DeliveryDetail onAddressSave={setDeliveryAddress} />
          <h3>Delivery Time</h3>
          <div>
            <input
              type="datetime-local"
              value={deliveryTime}
              onChange={handleDeliveryTimeChange}
              disabled={isAsap}
            />
            <button className={styles.asapButton} onClick={handleAsapToggle}>
              {isAsap ? "ASAP Selected" : "Set to ASAP"}
            </button>
          </div>
        </div>

        <FoodTile
          menu={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />

        <div>
          <FoodList />
          <div>
            <button className={styles.payButton} onClick={handlePay}>
              Pay
            </button>
            {showThanks && (
              <div className={styles.thankYouDialog}>
                Thank you for your order!
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
