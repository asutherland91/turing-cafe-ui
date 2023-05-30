import React, { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const reservation = {
      name,
      date,
      time,
      number
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="name"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(event) => {setName(event.target.value)}}
       />
      <input
        className="date"
        type="date"
        placeholder="Date (mm/yy)"
        name="date"
        value={date}
        onChange={(event) => {setDate(event.target.value)}}
      />
      <input
        className="time"
        type="time"
        placeholder="Time"
        name="time"
        value={time}
        onChange={(event) => {setTime(event.target.value)}}
       />
       <input
        className="number"
        type="number"
        placeholder="number"
        name="number"
        value={number}
        onChange={(event) => {setNumber(event.target.value)}}
       />
      <button>Make Reservation</button>
    </form>
  )
}