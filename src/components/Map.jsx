import React from "react";
import style from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Map = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=600x400&maptype=roadmap&key=YOUR_GOOGLE_MAPS_API_KEY`;

  return (
    <div className={style.mapContainer} onClick={() => navigate("form")}>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Back to Home
      </button>
    </div>
  );
};
