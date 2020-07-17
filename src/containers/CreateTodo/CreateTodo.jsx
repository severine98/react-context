import React, { Component } from "react";
import styles from "./CreateTodo.module.scss";
import { firestore } from "../../firebase";

class CreateTodo extends Component {
  state = {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
  };

  submitTodo = e => {
    e.preventDefault();
    firestore
      .collection("todos")
      .doc()
      .set(this.state)
      .then(() => {
        alert("Todo submitted");
      });
  };

  render() {    
    return (
      <section className={styles.form}>
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            name="name"
            placeholder="Name of todo..."
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <textarea
            type="text"
            name="description"
            placeholder="description of todo..."
            onChange={e => this.setState({ description: e.target.value })}
            required
          />
          <input type="date" name="start date" onChange={e => this.setState({ startDate: e.target.value })} required  />
          <input type="date" name="end date" onChange={e => this.setState({ endDate: e.target.value })} min={this.state.startDate} />
          <input type="submit" value="Submit Todo" className={styles.button} />
        </form>
      </section>
    );
  }
}

export default CreateTodo;
