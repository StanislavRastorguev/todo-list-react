import uuid from 'uuid';

const localList = JSON.parse(localStorage.getItem('list')) || [];

export const initialState = {
  item: '',
  editable: false,
  list: localList,
};

export const reducer = (state, action) => {
  const { item, editable, list } = state;

  const updateLocalStorage = newList => {
    localStorage.setItem('list', JSON.stringify(newList));
  };

  switch (action.type) {
    case 'input': {
      return {
        item: action.item,
        editable,
        list,
      };
    }
    case 'submit': {
      const newItem = {
        item: state.item,
        id: uuid(),
      };
      list.push(newItem);
      updateLocalStorage(list);
      return {
        item: '',
        editable: false,
        list,
      };
    }
    case 'remove': {
      const newList = state.list.filter(element => {
        return element.id !== action.id;
      });
      updateLocalStorage(newList);
      return {
        item,
        editable,
        list: newList,
      };
    }
    case 'update': {
      return {
        item: action.item,
        editable: true,
        list,
      };
    }
    default:
      return state;
  }
};
