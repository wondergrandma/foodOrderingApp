import { useContext } from "react";
import { CartContext } from "../../storage/CartProvider";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const redirectToPaymant = () => {
    navigate("/payment");
  };

  return (
    <>
      <div>
        <button onClick={redirectToPaymant}>CART</button>
      </div>
    </>
  );
}

export default ShoppingCart;
