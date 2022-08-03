import React, { Component } from "react";

export default class EducationBox extends Component {
  render() {
    return (
      <div id={this.props.info.id}>
        <p>{this.props.info.school}</p>
        <p>{`From:${this.props.info.from} - To:${this.props.info.to}`}</p>
        <button>Edit</button>
      </div>
    );
  }
}
