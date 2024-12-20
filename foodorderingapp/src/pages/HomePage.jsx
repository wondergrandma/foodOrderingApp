import Header from "../components/Header/Header";
import RestaurantTile from "../components/RestaurantTile/RestaurantTile";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header></Header>
      <div style={{ height: "25px" }}></div>
      <RestaurantTile></RestaurantTile>
      <div style={{ height: "140px" }}></div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
