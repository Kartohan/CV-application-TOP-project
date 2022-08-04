import React, { Component } from "react";
import InfoLine from "./InfoLine";

export default class GeneralInformation extends Component {
  render() {
    const infoList = this.props.general.map((item) => {
      return (
        <InfoLine
          edit={item.edit}
          key={item.name}
          id={item.name}
          onEdit={this.props.onEdit}
          text={item.text}
          preview={this.props.preview}
        />
      );
    });
    return (
      <div className="general-info">
        <h1>General Information</h1>
        {infoList}
      </div>
    );
  }
}
