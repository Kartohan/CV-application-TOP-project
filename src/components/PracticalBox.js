import React from "react";

export default function PracticalBox(props) {
  const position = {
    position: "relative",
  };
  const button = props.preview ? null : (
    <button onClick={props.editPrac}>Edit</button>
  );
  return (
    <div className="practical-box" style={position} id={props.info.id}>
      <p>{`Company name: ${props.info.company}`}</p>
      <p>{`Position: ${props.info.position}`}</p>
      <p>{`Main tasks: ${props.info.tasks}`}</p>
      <p>{`From:${props.info.from} - To:${props.info.to}`}</p>
      <div className="">{button}</div>
    </div>
  );
}
