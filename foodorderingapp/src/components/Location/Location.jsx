import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Location() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Fetching location...");

  const fetchCityName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=5b08da2dc5734a14a41cf36cddf4e497`
      );
      const data = await response.json();

      if (response.ok && data.results.length > 0) {
        const cityName =
          data.results[0].components.city ||
          data.results[0].components.town ||
          data.results[0].components.village ||
          "Unknown Location";
        setCity(cityName);
      } else {
        setCity("City not found");
      }
    } catch (err) {
      setError("Failed to fetch city name.");
      console.error(err);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchCityName(latitude, longitude);
        },
        (err) => {
          setError(
            "Unable to retrieve location. Please enable location services."
          );
          console.error(err);
          setCity("Location unavailable");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setCity("Geolocation not supported");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        paddingTop: "20px",
      }}
    >
      <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "black" }} />
      {error ? <p>{error}</p> : <p style={{ margin: 0 }}>{city}</p>}
    </div>
  );
}

export default Location;
