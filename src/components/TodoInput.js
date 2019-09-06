import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = props => {
  const { item, editable, handleInput, handleSubmit } = props;
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
};

TodoInput.propTypes = {
  item: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoInput;
