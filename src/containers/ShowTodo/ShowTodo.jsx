import React, { Component } from "react";
import styles from "./ShowTodo.module.scss";
import { firestore } from "../../firebase";

import TodoList from "../../components/TodoList";

class ShowTodo extends Component {
  state = {
    todos: []
  };

  getTodos = () => {
    firestore
      .collection("todos")
      .get()
      .then(querySnapshot => {
        const todos = querySnapshot.docs.map(doc => doc.data());
        this.setState({ todos });
      });
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default ShowTodo;
