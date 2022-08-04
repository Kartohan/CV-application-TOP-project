import React, { Component } from "react";

export default class EducationBox extends Component {
  render() {
    const position = {
      position: "relative",
    };
    return (
      <div style={position} id={this.props.info.id}>
        <p>{this.props.info.school}</p>
        <p>{`From:${this.props.info.from} - To:${this.props.info.to}`}</p>
        <button onClick={this.props.editEdu}>Edit</button>
      </div>
    );
  }
}
