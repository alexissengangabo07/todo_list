import React from "react";
import './style.css';

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Enter Tasks"
        className="text-input"
      />
      <button type="submit" className="submit-btn">Add ToDo</button>
    </form>
  );
}
