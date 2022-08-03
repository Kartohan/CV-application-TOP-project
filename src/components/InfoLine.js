import React, { Component } from "react";

export default class InfoLine extends Component {
  render() {
    const position = {
      position: "relative",
    };
    if (this.props.edit) {
      return (
        <div style={position} id={this.props.id}>
          <input type="text" defaultValue={this.props.text} />
          <button onClick={this.props.onEdit}>Edit</button>
        </div>
      );
    } else {
      return (
        <div style={position} id={this.props.id}>
          <p>{this.props.text}</p>
          <button onClick={this.props.onEdit}>Edit</button>
        </div>
      );
    }
  }
}
