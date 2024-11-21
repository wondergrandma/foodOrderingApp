import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./PaymentPage.module.css";
import FoodTile from "../components/FoodTile/FoodTile";
import OrderSumUp from "../components/OrderSumUp/OrderSumUp";
import DeliveryDetail from "../components/DeliveryDetails/DeliveryDetail";
import { CartContext } from "../storage/CartProvider";
import { useContext } from "react";

function PaymentPage() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header></Header>
      <div className={styles.paymentPageContainer}>
        <DeliveryDetail></DeliveryDetail>
        <FoodTile menu={cart}></FoodTile>
        <OrderSumUp></OrderSumUp>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PaymentPage;
