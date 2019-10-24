// Alternate TodoForm
import React, { Component } from "react";

class TodoForm extends Component {
  //(add back to test later) onClose = e => {
  //this.props.onClose && this.props.onClose(e);
  //};
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" />
            <button
              type="submit"
              //(add back to test later) onClick={e => {
              //this.onClose(e);}}
            >
              Add Goal
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoForm; // (delete and add  to the top to test close feature)

// Original TodoForm
/*import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';

import "./todostyles.css"

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <TextField
        className ="todo-form"
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;*/
