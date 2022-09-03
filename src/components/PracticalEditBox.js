import React from "react";

export default function PracticalEditBox(props) {
  const position = {
    position: "relative",
  };
  return (
    <div>
      <form style={position} id={props.info.id} onSubmit={props.submitPrac}>
        <div className="edit-line">
          <label htmlFor="Company">Company: </label>
          <input
            type="text"
            name="Company"
            placeholder="Company name"
            defaultValue={props.info.company}
          />
        </div>
        <div className="edit-line">
          <label htmlFor="Position">Position: </label>
          <input
            type="text"
            name="Position"
            placeholder="Position"
            defaultValue={props.info.position}
          />
        </div>
        <div className="edit-line">
          <label htmlFor="Tasks">Tasks: </label>
          <input
            type="text"
            name="Tasks"
            placeholder="Main tasks"
            defaultValue={props.info.tasks}
          />
        </div>
        <div className="edit-line">
          <label htmlFor="date-from">From: </label>
          <input type="date" name="date-from" defaultValue={props.info.from} />
        </div>
        <div className="edit-line">
          <label htmlFor="date-to">To: </label>
          <input type="date" name="date-to" defaultValue={props.info.to} />
        </div>
        <div className="edit-buttons">
          <button type="submit">Submit</button>
          <button onClick={props.deletePrac}>Delete</button>
        </div>
      </form>
    </div>
  );
}
