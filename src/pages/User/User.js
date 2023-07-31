import React, { Component } from "react";
import UserContent from "../../parts/user/UserContent";
import Header from "../../parts/header/Header";
import Sidebar from "../../parts/sidebar/Sidebar";

export class User extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <UserContent />
      </>
    );
  }
}
