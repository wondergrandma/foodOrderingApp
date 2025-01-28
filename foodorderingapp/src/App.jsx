import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PaymentPage from "./pages/PaymentPage";
import RestaurantPage from "./pages/RestaurantPage";
import UserProfilePage from "./pages/UserProfilePage";
import DeliveryChat from "./components/DeliveryChat/DeliveryChat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./storage/CartProvider";
import { ChatProvider } from "./storage/ChatProvider";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./authentication/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ChatProvider>
            <Router>
              <div style={{ padding: "0 2%" }}>
                <Routes>
                  <Route path="/" element={<HomePage></HomePage>}></Route>
                  <Route
                    path="/about"
                    element={<AboutPage></AboutPage>}
                  ></Route>
                  <Route
                    path="/restaurant/:id"
                    element={<RestaurantPage></RestaurantPage>}
                  ></Route>
                  <Route
                    path="/payment"
                    element={<PaymentPage></PaymentPage>}
                  ></Route>
                  <Route path="/profile" element={<UserProfilePage />} />
                </Routes>
              </div>
              <Footer></Footer>
            </Router>
          </ChatProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
