import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Ex.: meeting at 4:20"
      />
      <button type="submit">Add ToDo</button>
    </form>
  );
}
