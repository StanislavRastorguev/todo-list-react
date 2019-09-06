import React, { useReducer } from 'react';
import '../style.css';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { initialState, reducer } from '../reducers/TodoReducer';

const TodoAppContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { item, list, editable } = state;

  return (
    <div className="App">
      <h1>Todo-list</h1>
      <br />
      <TodoInput
        item={item}
        editable={editable}
        handleInput={e => dispatch({ type: 'input', item: e.target.value })}
        handleSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'submit', item: e.target.value });
        }}
      />
      <br />
      <TodoList
        list={list}
        handleRemove={itemId => dispatch({ type: 'remove', id: itemId })}
        handleUpdate={itemData => {
          dispatch({ type: 'remove', id: itemData.id });
          dispatch({ type: 'update', item: itemData.item });
        }}
      />
    </div>
  );
};

export default TodoAppContainer;
