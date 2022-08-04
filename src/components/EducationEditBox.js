import React, { Component } from "react";

export default class EducationEditBox extends Component {
  render() {
    const position = {
      position: "relative",
    };
    return (
      <div>
        <form
          onSubmit={this.props.submitEdu}
          style={position}
          id={this.props.info.id}
          action=""
        >
          <div className="edit-line">
            <label htmlFor="school">School: </label>
            <input
              type="text"
              name="school"
              placeholder="School name"
              defaultValue={this.props.info.school}
            />
          </div>
          <div className="edit-line">
            <label htmlFor="date-from">From: </label>
            <input
              type="date"
              name="date-from"
              defaultValue={this.props.info.from}
            />
          </div>
          <div className="edit-line">
            <label htmlFor="date-to">To: </label>
            <input
              type="date"
              name="date-to"
              defaultValue={this.props.info.to}
            />
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button onClick={this.props.deleteEdu}>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}
