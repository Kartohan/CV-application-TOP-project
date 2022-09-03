import React from "react";

export default function InfoLine(props) {
  const position = {
    position: "relative",
  };
  const button = props.preview ? null : (
    <button onClick={props.onEdit}>Edit</button>
  );
  if (props.edit) {
    return (
      <div style={position} id={props.id}>
        <input type="text" defaultValue={props.text} />
        {button}
      </div>
    );
  } else {
    return (
      <div style={position} id={props.id}>
        <p>{props.text}</p>
        {button}
      </div>
    );
  }
}
