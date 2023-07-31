import React, { Component } from "react";
import Header from "../../parts/header/Header";
import Sidebar from "../../parts/sidebar/Sidebar";
import WisataContent from "../../parts/wisata/WisataContent";

export class Wisata extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <WisataContent />
      </>
    );
  }
}
