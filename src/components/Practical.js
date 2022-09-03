import React from "react";
import PracticalBox from "./PracticalBox";
import PracticalEditBox from "./PracticalEditBox";

export default function Practical(props) {
  const button = props.preview ? null : (
    <button className="add" onClick={props.addNewPrac}>
      Add New
    </button>
  );
  const pracList = props.practical.map((item) => {
    if (item.edit) {
      return (
        <PracticalEditBox
          key={item.id}
          info={item}
          submitPrac={props.submitPrac}
          deletePrac={props.deletePrac}
        />
      );
    } else {
      return (
        <PracticalBox
          key={item.id}
          info={item}
          editPrac={props.editPrac}
          preview={props.preview}
        />
      );
    }
  });
  return (
    <div className="practical-info">
      <h1>Practical Expirience</h1>
      {pracList}
      {button}
    </div>
  );
}
