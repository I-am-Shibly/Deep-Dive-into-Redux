import {
  ADD_TODO,
  ALL_COMPLETE,
  CLEAR_COMPLETED,
  COLOR_CHANGE,
  DELETE_TODO,
  TOGGLE,
} from './actionTypes';

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText,
  };
};

export const allComplete = () => {
  return {
    type: ALL_COMPLETE,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};

export const colorChange = (todoId, color) => {
  return {
    type: COLOR_CHANGE,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const toggle = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId,
  };
};
