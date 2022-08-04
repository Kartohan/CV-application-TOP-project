import React, { Component } from "react";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Practical from "./Practical";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: [
        { name: "name", edit: false, text: "Full Name" },
        { name: "email", edit: false, text: "E-mail" },
        { name: "tel", edit: false, text: "Tel" },
      ],
      education: [],
      practical: [],
      preview: false,
    };
  }

  onEditGeneral = (e) => {
    if (
      this.state.general.find((item) => item.name === e.target.offsetParent.id)
        .edit === false
    ) {
      this.changeInfo(e);
    } else if (
      this.state.general.find((item) => item.name === e.target.offsetParent.id)
        .edit === true
    ) {
      this.changeInfo(e);
    }
  };

  changeInfo(e) {
    let newGeneral = this.state.general;
    let item = newGeneral.find(
      (item) => item.name === e.target.offsetParent.id
    );
    if (item.edit) {
      item.text = e.target.offsetParent.firstChild.value;
    }
    item.edit = !item.edit;
    let index = this.state.general.findIndex(
      (item) => item.name === e.target.offsetParent.id
    );
    newGeneral.splice(index, 1, item);
    this.setState({
      general: newGeneral,
    });
  }
  editEdu = (e) => {
    let newEdu = this.state.education;
    let index = newEdu.findIndex(
      (item) => item.id === e.target.offsetParent.id
    );
    let item = newEdu.find((item) => item.id === e.target.offsetParent.id);
    item.edit = !item.edit;
    newEdu.splice(index, 1, item);
    this.setState({
      education: newEdu,
    });
  };
  editPrac = (e) => {
    let newPrac = this.state.practical;
    let index = newPrac.findIndex(
      (item) => item.id === e.target.offsetParent.id
    );
    let item = newPrac.find((item) => item.id === e.target.offsetParent.id);
    item.edit = !item.edit;
    newPrac.splice(index, 1, item);
    this.setState({
      practical: newPrac,
    });
  };

  addNewEdu = () => {
    let template = {
      id: (Date.now() * Math.random()).toFixed(0).toString(),
      school: "",
      from: "",
      to: "",
      edit: true,
    };
    this.setState({
      education: this.state.education.concat(template),
    });
  };

  addNewPrac = () => {
    let template = {
      id: (Date.now() * Math.random()).toFixed(0).toString(),
      company: "",
      position: "",
      tasks: "",
      from: "",
      to: "",
      edit: true,
    };
    this.setState({
      practical: this.state.practical.concat(template),
    });
  };

  deleteEdu = (e) => {
    e.preventDefault();
    let newEdu = this.state.education;
    newEdu = newEdu.filter((item) => item.id !== e.target.offsetParent.id);
    this.setState({
      education: newEdu,
    });
  };

  deletePrac = (e) => {
    e.preventDefault();
    let newPrac = this.state.practical;
    newPrac = newPrac.filter((item) => item.id !== e.target.offsetParent.id);
    this.setState({
      practical: newPrac,
    });
  };

  submitEdu = (e) => {
    e.preventDefault();
    let newEdu = this.state.education;
    let item = newEdu.find((item) => item.id === e.target.id);
    let index = newEdu.findIndex((item) => item.id === e.target.id);
    item.edit = !item.edit;
    item.school = e.target[0].value;
    item.from = e.target[1].value;
    item.to = e.target[2].value;
    newEdu.splice(index, 1, item);
    this.setState({
      education: newEdu,
    });
  };

  submitPrac = (e) => {
    e.preventDefault();
    let newPrac = this.state.practical;
    let item = newPrac.find((item) => item.id === e.target.id);
    let index = newPrac.findIndex((item) => item.id === e.target.id);
    item.edit = !item.edit;
    item.company = e.target[0].value;
    item.position = e.target[1].value;
    item.tasks = e.target[2].value;
    item.from = e.target[3].value;
    item.to = e.target[4].value;
    newPrac.splice(index, 1, item);
    this.setState({
      practical: newPrac,
    });
  };
  preview = (e) => {
    let newGeneral = this.state.general;
    newGeneral.map((item) => (item.edit = false));
    let newEdu = this.state.education;
    newEdu.map((item) => (item.edit = false));
    let newPrac = this.state.practical;
    newPrac.map((item) => (item.edit = false));
    this.setState(
      {
        general: newGeneral,
        education: newEdu,
        practical: newPrac,
        preview: !this.state.preview,
      },
      () => {
        if (this.state.preview) {
          e.target.innerText = "Back to Edit";
        } else {
          e.target.innerText = "Preview";
        }
      }
    );
  };

  render() {
    return (
      <div className="main">
        <h1 className="title">CV Application</h1>
        <GeneralInformation
          onEdit={this.onEditGeneral}
          general={this.state.general}
          preview={this.state.preview}
        />
        <Education
          deleteEdu={this.deleteEdu}
          addNewEdu={this.addNewEdu}
          submitEdu={this.submitEdu}
          editEdu={this.editEdu}
          education={this.state.education}
          preview={this.state.preview}
        />
        <Practical
          practical={this.state.practical}
          preview={this.state.preview}
          addNewPrac={this.addNewPrac}
          submitPrac={this.submitPrac}
          deletePrac={this.deletePrac}
          editPrac={this.editPrac}
        />
        <button className="add" onClick={this.preview}>
          Preview
        </button>
      </div>
    );
  }
}
