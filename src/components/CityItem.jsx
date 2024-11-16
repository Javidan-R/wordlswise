import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const CityItem = ({ city }) => {
  const { cityName, emoji, date, id, position } = city;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  const name = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`/app/cities/${id}?lat=${position.lat}&lang=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{name}</h3>
        <time className={styles.date}>
          {formatDate(date)} <span className={styles.timeAgo}>ago</span>{" "}
        </time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
//  431079004159
export default CityItem;
