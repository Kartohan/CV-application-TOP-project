import React, { Component } from "react";

export default class PracticalBox extends Component {
  render() {
    const position = {
      position: "relative",
    };
    const button = this.props.preview ? null : (
      <button onClick={this.props.editPrac}>Edit</button>
    );
    return (
      <div className="practical-box" style={position} id={this.props.info.id}>
        <p>{`Company name: ${this.props.info.company}`}</p>
        <p>{`Position: ${this.props.info.position}`}</p>
        <p>{`Main tasks: ${this.props.info.tasks}`}</p>
        <p>{`From:${this.props.info.from} - To:${this.props.info.to}`}</p>
        <div className="">{button}</div>
      </div>
    );
  }
}
