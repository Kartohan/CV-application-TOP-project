import React, { Component } from "react";

export default class PracticalEditBox extends Component {
  render() {
    const position = {
      position: "relative",
    };
    return (
      <div>
        <form
          style={position}
          id={this.props.info.id}
          onSubmit={this.props.submitPrac}
        >
          <div className="edit-line">
            <label htmlFor="Company">Company: </label>
            <input
              type="text"
              name="Company"
              placeholder="Company name"
              defaultValue={this.props.info.company}
            />
          </div>
          <div className="edit-line">
            <label htmlFor="Position">Position: </label>
            <input
              type="text"
              name="Position"
              placeholder="Position"
              defaultValue={this.props.info.position}
            />
          </div>
          <div className="edit-line">
            <label htmlFor="Tasks">Tasks: </label>
            <input
              type="text"
              name="Tasks"
              placeholder="Main tasks"
              defaultValue={this.props.info.tasks}
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
          <div className="edit-buttons">
            <button type="submit">Submit</button>
            <button onClick={this.props.deletePrac}>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}
