import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { list, handleRemove, handleUpdate } = this.props;

    return (
      <div className="ListWrapper">
        <ul className="List">
          {list.map((item, index) => {
            return (
              <li className="Item" key={item + '_' + index}>
                <span>{item}</span>
                <div>
                  <button onClick={() => handleUpdate(item, index)}>edit</button>
                  <button onClick={() => handleRemove(index)}>x</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
