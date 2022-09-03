import React, { useState, useEffect } from "react";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Practical from "./Practical";

export default function App(props) {
  const [state, setState] = useState({
    general: [
      { name: "name", edit: false, text: "Full Name" },
      { name: "email", edit: false, text: "E-mail" },
      { name: "tel", edit: false, text: "Tel" },
    ],
    education: [],
    practical: [],
    preview: false,
    btnText: "Preview",
  });

  let onEditGeneral = (e) => {
    if (
      state.general.find((item) => item.name === e.target.offsetParent.id)
        .edit === false
    ) {
      changeInfo(e);
    } else if (
      state.general.find((item) => item.name === e.target.offsetParent.id)
        .edit === true
    ) {
      changeInfo(e);
    }
  };

  let changeInfo = (e) => {
    let newGeneral = state.general;
    let item = newGeneral.find(
      (item) => item.name === e.target.offsetParent.id
    );
    if (item.edit) {
      item.text = e.target.offsetParent.firstChild.value;
    }
    item.edit = !item.edit;
    let index = state.general.findIndex(
      (item) => item.name === e.target.offsetParent.id
    );
    newGeneral.splice(index, 1, item);
    setState((prevState) => {
      return { ...prevState, general: newGeneral };
    });
  };
  let editEdu = (e) => {
    let newEdu = state.education;
    let index = newEdu.findIndex(
      (item) => item.id === e.target.offsetParent.id
    );
    let item = newEdu.find((item) => item.id === e.target.offsetParent.id);
    item.edit = !item.edit;
    newEdu.splice(index, 1, item);
    setState((prevState) => {
      return { ...prevState, education: newEdu };
    });
  };
  let editPrac = (e) => {
    let newPrac = state.practical;
    let index = newPrac.findIndex(
      (item) => item.id === e.target.offsetParent.id
    );
    let item = newPrac.find((item) => item.id === e.target.offsetParent.id);
    item.edit = !item.edit;
    newPrac.splice(index, 1, item);
    setState((prevState) => {
      return { ...prevState, practical: newPrac };
    });
  };

  let addNewEdu = () => {
    let template = {
      id: (Date.now() * Math.random()).toFixed(0).toString(),
      school: "",
      from: "",
      to: "",
      edit: true,
    };
    setState((prevState) => {
      return { ...prevState, education: state.education.concat(template) };
    });
  };

  let addNewPrac = () => {
    let template = {
      id: (Date.now() * Math.random()).toFixed(0).toString(),
      company: "",
      position: "",
      tasks: "",
      from: "",
      to: "",
      edit: true,
    };
    setState((prevState) => {
      return { ...prevState, practical: state.practical.concat(template) };
    });
  };

  let deleteEdu = (e) => {
    e.preventDefault();
    let newEdu = state.education;
    newEdu = newEdu.filter((item) => item.id !== e.target.offsetParent.id);
    setState((prevState) => {
      return { ...prevState, education: newEdu };
    });
  };

  let deletePrac = (e) => {
    e.preventDefault();
    let newPrac = state.practical;
    newPrac = newPrac.filter((item) => item.id !== e.target.offsetParent.id);
    setState((prevState) => {
      return { ...prevState, practical: newPrac };
    });
  };

  let submitEdu = (e) => {
    e.preventDefault();
    let newEdu = state.education;
    let item = newEdu.find((item) => item.id === e.target.id);
    let index = newEdu.findIndex((item) => item.id === e.target.id);
    item.edit = !item.edit;
    item.school = e.target[0].value;
    item.from = e.target[1].value;
    item.to = e.target[2].value;
    newEdu.splice(index, 1, item);
    setState((prevState) => {
      return { ...prevState, education: newEdu };
    });
  };

  let submitPrac = (e) => {
    e.preventDefault();
    let newPrac = state.practical;
    let item = newPrac.find((item) => item.id === e.target.id);
    let index = newPrac.findIndex((item) => item.id === e.target.id);
    item.edit = !item.edit;
    item.company = e.target[0].value;
    item.position = e.target[1].value;
    item.tasks = e.target[2].value;
    item.from = e.target[3].value;
    item.to = e.target[4].value;
    newPrac.splice(index, 1, item);
    setState((prevState) => {
      return { ...prevState, practical: newPrac };
    });
  };
  let preview = (e) => {
    let newGeneral = state.general;
    newGeneral.map((item) => (item.edit = false));
    let newEdu = state.education;
    newEdu.map((item) => (item.edit = false));
    let newPrac = state.practical;
    newPrac.map((item) => (item.edit = false));
    setState((prevState) => {
      return {
        ...prevState,
        general: newGeneral,
        education: newEdu,
        practical: newPrac,
        preview: !state.preview,
      };
    });
  };

  useEffect(() => {
    if (state.preview) {
      setState((prevState) => {
        return { ...prevState, btnText: "Back to Edit" };
      });
    } else {
      setState((prevState) => {
        return { ...prevState, btnText: "Preview" };
      });
    }
  }, [state.preview]);

  return (
    <div className="main">
      <h1 className="title">CV Application</h1>
      <GeneralInformation
        onEdit={onEditGeneral}
        general={state.general}
        preview={state.preview}
      />
      <Education
        deleteEdu={deleteEdu}
        addNewEdu={addNewEdu}
        submitEdu={submitEdu}
        editEdu={editEdu}
        education={state.education}
        preview={state.preview}
      />
      <Practical
        practical={state.practical}
        preview={state.preview}
        addNewPrac={addNewPrac}
        submitPrac={submitPrac}
        deletePrac={deletePrac}
        editPrac={editPrac}
      />
      <button className="add" onClick={preview}>
        {state.btnText}
      </button>
    </div>
  );
}
