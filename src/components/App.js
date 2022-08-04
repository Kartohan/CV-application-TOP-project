import React, { Component } from "react";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: [
        { name: "name", edit: false, text: "Name" },
        { name: "email", edit: false, text: "E-mail" },
        { name: "tel", edit: false, text: "Tel" },
      ],
      education: [],
      practicalExp: [
        {
          id: (Date.now() * Math.random()).toFixed(0).toString(),
          company: "",
          position: "",
          tasks: "",
          from: "",
          to: "",
        },
      ],
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

  deleteEdu = (e) => {
    e.preventDefault();
    let newEdu = this.state.education;
    newEdu = newEdu.filter((item) => item.id !== e.target.offsetParent.id);
    console.log(newEdu);
    this.setState({
      education: newEdu,
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

  render() {
    return (
      <div>
        <GeneralInformation
          onEdit={this.onEditGeneral}
          general={this.state.general}
        />
        <Education
          deleteEdu={this.deleteEdu}
          addNewEdu={this.addNewEdu}
          submitEdu={this.submitEdu}
          editEdu={this.editEdu}
          education={this.state.education}
        />
        {/* <PracticalExp /> */}
      </div>
    );
  }
}
