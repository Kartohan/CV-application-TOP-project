import React, { Component } from "react";
import EducationBox from "./EducationBox";
import EducationEditBox from "./EducationEditBox";

export default class Education extends Component {
  render() {
    const button = this.props.preview ? null : (
      <button className="add" onClick={this.props.addNewEdu}>
        Add School
      </button>
    );
    const eduList = this.props.education.map((item) => {
      if (item.edit) {
        return (
          <EducationEditBox
            deleteEdu={this.props.deleteEdu}
            submitEdu={this.props.submitEdu}
            key={item.id}
            info={item}
          />
        );
      } else {
        return (
          <EducationBox
            key={item.id}
            info={item}
            editEdu={this.props.editEdu}
            preview={this.props.preview}
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
}
