import React, { Component } from "react";
import { Router } from "@reach/router";

import ShowTodo from "../ShowTodo";
import CreateTodo from "../CreateTodo";


class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <ShowTodo path="/" />
          <CreateTodo path="create" />
        </Router>
      </>
    );
  }
}

export default Routes;
