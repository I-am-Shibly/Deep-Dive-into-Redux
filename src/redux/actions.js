import { ADD_DATA, DELETE } from './actionTypes';

export const addData = (payload) => {
  return {
    type: ADD_DATA,
    payload,
  };
};

export const deleteData = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
