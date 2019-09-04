import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const { item, editable, handleInput, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add a task</h2>
          <input
            type="text"
            placeholder="Enter task name"
            value={item}
            onChange={handleInput}
          />
          <button type="submit">{editable ? 'Edit' : 'Add'}</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
