import React from "react";
import "./ResCard.css";


export const ResCard = ({ id, name, date, time, number}) => {
  return (
    <div id={id}>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}