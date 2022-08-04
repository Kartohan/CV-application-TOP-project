import React, { Component } from "react";
import PracticalBox from "./PracticalBox";
import PracticalEditBox from "./PracticalEditBox";

export default class Practical extends Component {
  render() {
    const button = this.props.preview ? null : (
      <button className="add" onClick={this.props.addNewPrac}>
        Add New
      </button>
    );
    const pracList = this.props.practical.map((item) => {
      if (item.edit) {
        return (
          <PracticalEditBox
            key={item.id}
            info={item}
            submitPrac={this.props.submitPrac}
            deletePrac={this.props.deletePrac}
          />
        );
      } else {
        return (
          <PracticalBox
            key={item.id}
            info={item}
            editPrac={this.props.editPrac}
            preview={this.props.preview}
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
}
