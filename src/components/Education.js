import React from "react";
import EducationBox from "./EducationBox";
import EducationEditBox from "./EducationEditBox";

export default function Education(props) {
  const button = props.preview ? null : (
    <button className="add" onClick={props.addNewEdu}>
      Add School
    </button>
  );
  const eduList = props.education.map((item) => {
    if (item.edit) {
      return (
        <EducationEditBox
          deleteEdu={props.deleteEdu}
          submitEdu={props.submitEdu}
          key={item.id}
          info={item}
        />
      );
    } else {
      return (
        <EducationBox
          key={item.id}
          info={item}
          editEdu={props.editEdu}
          preview={props.preview}
        />
      );
    }
  });
  return (
    <div className="education-info">
      <h1>Education</h1>
      {eduList}
      {button}
    </div>
  );
}
