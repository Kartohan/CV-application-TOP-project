import React from "react";
import InfoLine from "./InfoLine";

export default function GeneralInformation(props) {
  const infoList = props.general.map((item) => {
    return (
      <InfoLine
        edit={item.edit}
        key={item.name}
        id={item.name}
        onEdit={props.onEdit}
        text={item.text}
        preview={props.preview}
      />
    );
  });
  return (
    <div className="general-info">
      <h1>General Information</h1>
      {infoList}
    </div>
  );
}
