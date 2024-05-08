import {
  ADD_TODO,
  ALL_COMPLETE,
  CLEAR_COMPLETED,
  COLOR_CHANGE,
  DELETE_TODO,
  TOGGLE,
} from './actionTypes';

const initialState = [
  {
    id: 1,
    todoText: 'learn something',
    completed: true,
    color: 'green',
  },
  {
    id: 2,
    todoText: 'learn react',
    completed: false,
    color: 'red',
  },
];

const newId = (array) => {
  const maxId = array.reduce((maxId, state) => Math.max(maxId, state.id), 0);
  return maxId + 1;
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.payload.trim() !== '') {
        return [
          ...state,
          {
            id: newId(state),
            todoText: action.payload,
            completed: false,
          },
        ];
      } else {
        return state;
      }

    case ALL_COMPLETE:
      return state.map((todo) => ({
        ...todo,
        completed: true,
      }));

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    case COLOR_CHANGE:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            color,
          };
        }

        return todo;
      });

    case TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
