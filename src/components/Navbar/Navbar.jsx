import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "@reach/router";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="create">Create</Link>
        </nav>
      </>
    );
  }
}

export default Navbar;
