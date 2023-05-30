import React from "react";
import "./ResCard.css";


export const ReservationsDisplay = ({reservations}) => {
  return (
    <div>
      <h3>{reservations.name}</h3>
      <p>{reservations.date}</p>
      <p>{reservations.time}</p>
      <p>{reservations.number}</p>
      <button>Cancel</button>
    </div>
  )
}