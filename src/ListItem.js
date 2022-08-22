
import React from "react";
import './style.css';

export default function ListItem(props) {
  const { name, done } = props.todo;
  return (
    <li style={{ textDecoration: done ? "line-through" : "" }} className='items'>
      {name}
      <span>
        {!done ? <button onClick={props.completed} className='completed-btn'>Completed</button> : ""}
        <button onClick={props.remove} className="remove-btn">Remove</button>
      </span>
    </li>
  );
}
