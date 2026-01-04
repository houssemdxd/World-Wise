/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import styles from "./CityItem.module.css"
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({city}) {
    const { cityName, emoji, date, notes,id,position } = city;

  return (

   <li >
    <Link className={styles.cityItem} to={`${city.id}?lat=${position.lat}&lng=${position.lng}`} >
    <span className={styles.emoji}> {city.emoji}</span>

    <h3 className = {styles.name}>{city.cityName}</h3>

    <time className={styles.date}>{formatDate(city.date)}</time>
    <button className={styles.deleteBtn}> &times;</button>
</Link>
   </li>
  )
}
