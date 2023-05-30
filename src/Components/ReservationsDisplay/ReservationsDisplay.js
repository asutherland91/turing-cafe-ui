import React from "react";
import { ResCard } from "../ResCard/ResCard";
import "./ReservationsDisplay.css";

export const ReservationsDisplay = ({reservations}) => {
  const resCards = reservations.map((reservation) => {
    return (
      <ResCard
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      />
    );
  });

  return (
    <div className="card-wrapper">
      {resCards}
    </div>
  )
}