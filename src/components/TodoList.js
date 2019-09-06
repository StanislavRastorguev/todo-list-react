import React from 'react';
import PropTypes from 'prop-types';

const TodoList = props => {
  const { list, handleRemove, handleUpdate } = props;
  return (
    <div className="ListWrapper">
      <ul className="List">
        {list.map(item => {
          return (
            <li className="Item" key={item.id}>
              <span>{item.item}</span>
              <div>
                <button type="button" onClick={() => handleUpdate(item)}>
                  edit
                </button>
                <button type="button" onClick={() => handleRemove(item.id)}>
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default TodoList;
