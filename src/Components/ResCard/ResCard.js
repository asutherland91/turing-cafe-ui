import React from "react";
import "./ResCard.css";


export const ReservationsDisplay = ({name, date, time, number}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
      <button>Cancel</button>
    </div>
  )
}