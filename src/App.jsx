import React, { Component } from "react";
import styles from "./App.module.scss";

import Routes from "./containers/Routes";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Routes />
      </>
    );
  }
}

export default App;
