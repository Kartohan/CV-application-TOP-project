import React from "react";

export default function EducationBox(props) {
  const position = {
    position: "relative",
  };
  const button = props.preview ? null : (
    <button onClick={props.editEdu}>Edit</button>
  );
  return (
    <div className="education-box" style={position} id={props.info.id}>
      <p>{`School: ${props.info.school}`}</p>
      <p>{`From:${props.info.from} - To:${props.info.to}`}</p>
      <div className="|">{button}</div>
    </div>
  );
}
