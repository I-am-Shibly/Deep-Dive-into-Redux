import { toggle } from '../actions';

export const statusUpdate = (todoId, status) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({ id: todoId, completed: !status }),
    headers: {
      'Content-type': 'application/json; charset = UTF-8',
    },
  });

  const updatedTodo = await response.json();
  dispatch(toggle(updatedTodo.id));
};
