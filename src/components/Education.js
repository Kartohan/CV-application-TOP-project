import React, { Component } from "react";
import EducationBox from "./EducationBox";
import EducationEditBox from "./EducationEditBox";

export default class Education extends Component {
  render() {
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
        return <EducationBox key={item.id} info={item} />;
      }
    });
    return (
      <div>
        <h1>Education</h1>
        {eduList}
        <button onClick={this.props.addNewEdu}>Add School</button>
      </div>
    );
  }
}
