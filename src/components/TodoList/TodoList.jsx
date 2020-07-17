import React, { Component } from "react";
import styles from "./TodoList.module.scss";

import Todo from "../Todo";

class TodoList extends Component {
  render() {
    return (
      <section className={styles.todos}>
        {this.props.todos.map(todo => {
          return <Todo todo={todo} />;
        })}
      </section>
    );
  }
}

export default TodoList;
