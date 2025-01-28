import React from "react";
import "./DeliveryProgress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faHome } from "@fortawesome/free-solid-svg-icons";

function DeliveryProgress({ progressPercent = 0 }) {
  const maxCarOffset = 90; 
  const carPositionPercent = (progressPercent * maxCarOffset) / 100;

  return (
    <div className="delivery-progress-container">
      <div className="track-line">
        <div
          className="car-icon"
          style={{ left: `${carPositionPercent}%` }}
        >
          <FontAwesomeIcon icon={faCarSide} style={{ color: "black" }} />
        </div>
        <div className="home-icon"><FontAwesomeIcon icon={faHome} style={{ color: "black" }} /></div>
      </div>
    </div>
  );
}

export default DeliveryProgress;
