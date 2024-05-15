import { colorChange } from '../actions';

export const colorUpdate = (todoId, color) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({ id: todoId, color }),
    headers: {
      'Content-type': 'application/json; charset = UTF-8',
    },
  });

  const updatedTodo = await response.json();
  dispatch(colorChange(updatedTodo.id, updatedTodo.color));
};
