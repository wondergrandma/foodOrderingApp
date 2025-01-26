import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import RestaurantPage from "./pages/RestaurantPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./storage/CartProvider";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./authentication/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<AboutPage></AboutPage>}></Route>
              <Route
                path="/restaurant/:id"
                element={<RestaurantPage></RestaurantPage>}
              ></Route>
              <Route
                path="/payment"
                element={<PaymentPage></PaymentPage>}
              ></Route>
            </Routes>
            <Footer></Footer>
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
