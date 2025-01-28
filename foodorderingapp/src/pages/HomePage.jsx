import React, { useState } from "react";

import Header from "../components/Header/Header";
import RestaurantTile from "../components/RestaurantTile/RestaurantTile";

import DeliveryChat from "../components/DeliveryChat/DeliveryChat";

function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Header></Header>
      <div style={{ height: "120px" }}></div>
      <RestaurantTile></RestaurantTile>
      <div style={{ height: "140px" }}></div>

      <DeliveryChat isOpen={isChatOpen} />
    </>
  );
}

export default HomePage;
