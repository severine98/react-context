import React, { Component } from "react";
import styles from "./Todo.module.scss";

class Todo extends Component {
  render() {
    return (
        <article className={styles.todo}>
          <h2>{this.props.todo.name}</h2>
          <p>{this.props.todo.description}</p>
          <p>{this.props.todo.startDate}</p>
          <p>{this.props.todo.endDate}</p>
        </article>
    );
  }
}

export default Todo;
