import React, { Component } from "react";
import styles from "./CreateTodo.module.scss";
import { firestore } from "../../firebase";

class CreateTodo extends Component {
  state = {
    name: "",
    description: "",
    startDate: "",
    endDate: ""
  };

  clearForm = () => {
    this.setState({
      name: "",
      description: "",
      startDate: "",
      endDate: ""
    });
  };

  postTodo = todo => {
    firestore
      .collection("todos")
      .doc()
      .set(todo)
      .then(() => {
        alert("Todo submitted");
      });
  };

  submitTodo = e => {
    e.preventDefault();
    this.postTodo(this.state);
    this.clearForm();
  };

  render() {
    return (
      <section className={styles.form}>
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            name="name"
            placeholder="Name of todo..."
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <textarea
            type="text"
            name="description"
            placeholder="description of todo..."
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            required
          />
          <input
            type="date"
            name="start date"
            value={this.state.startDate}
            onChange={e => this.setState({ startDate: e.target.value })}
            required
          />
          <input
            type="date"
            name="end date"
            value={this.state.endDate}
            onChange={e => this.setState({ endDate: e.target.value })}
            min={this.state.startDate}
          />
          <input type="submit" value="Submit Todo" className={styles.button} />
        </form>
      </section>
    );
  }
}

export default CreateTodo;
