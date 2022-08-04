import React, { Component } from "react";

export default class EducationBox extends Component {
  render() {
    const position = {
      position: "relative",
    };
    const button = this.props.preview ? null : (
      <button onClick={this.props.editEdu}>Edit</button>
    );
    return (
      <div className="education-box" style={position} id={this.props.info.id}>
        <p>{`School: ${this.props.info.school}`}</p>
        <p>{`From:${this.props.info.from} - To:${this.props.info.to}`}</p>
        <div className="|">{button}</div>
      </div>
    );
  }
}
