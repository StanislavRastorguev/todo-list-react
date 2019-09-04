import React, { Component } from 'react';
import '../style.css';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

class TodoAppContainer extends Component {
  constructor(props) {
    super(props);
    console.log(localStorage.getItem('list'));
    this.state = {
      item: '',
      editable: false,
      list: localStorage.getItem('list').split(',') || [],
    };
  }

  updateLocalStorage = list => {
    localStorage.setItem('list', list);
  };

  handleInput = e => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { list, item } = this.state;
    if (item === '' || !item) {
      return;
    }
    list.push(item);
    this.updateLocalStorage(list);
    this.setState({
      item: '',
      editable: false,
      list,
    });
  };

  handleRemove = itemIndex => {
    const { list } = this.state;
    const newList = list.filter((element, index) => index !== itemIndex);
    this.updateLocalStorage(newList);
    this.setState({
      item: '',
      editable: false,
      list: newList,
    });
  };

  handleUpdate = (item, index) => {
    this.handleRemove(index);
    this.setState({
      item,
      editable: true,
    });
  };

  render() {
    const { item, list, editable } = this.state;
    const { handleInput, handleSubmit, handleRemove, handleUpdate } = this;
    return (
      <div className="App">
        <h1>Todo-list</h1>
        <br />
        <TodoInput
          item={item}
          editable={editable}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
        <br />
        <TodoList
          list={list}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
      </div>
    );
  }
}

export default TodoAppContainer;
