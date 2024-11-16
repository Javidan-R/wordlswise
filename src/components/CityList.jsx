import React from "react";
import Spinner from "../components/Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesProvider";
const CityList = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} /> // Assuming each city has a unique `id`
      ))}
    </ul>
  );
};

export default CityList;
