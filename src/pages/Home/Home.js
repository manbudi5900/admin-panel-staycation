import React, { Component } from "react";
import Header from "../../parts/header/Header";
import Sidebar from "../../parts/sidebar/Sidebar";
import HomeContent from "../../parts/home_content/HomeContent";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <HomeContent />
      </>
    );
  }
}
