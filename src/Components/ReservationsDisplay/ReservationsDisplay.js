import React from "react";
import ResCard from "./ResCard";
import "./ReservationsDisplay.css";

export const ReservationsDisplay = ({reservations}) => {
  const resCards = reservations.map(reservation => {
    <ResCard
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      />
  })
  return (
    <div>
      {resCards}
    </div>
  )
}