import React from "react";

export default function EducationEditBox(props) {
  const position = {
    position: "relative",
  };
  return (
    <div>
      <form
        onSubmit={props.submitEdu}
        style={position}
        id={props.info.id}
        action=""
      >
        <div className="edit-line">
          <label htmlFor="school">School: </label>
          <input
            type="text"
            name="school"
            placeholder="School name"
            defaultValue={props.info.school}
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
        <div className="buttons">
          <button type="submit">Submit</button>
          <button onClick={props.deleteEdu}>Delete</button>
        </div>
      </form>
    </div>
  );
}
