import { addTodo } from '../actions';

export const addTodoThunk = (todoText) => async (dispatch) => {
  const response = await fetch('http://localhost:9000/todos', {
    method: 'POST',
    body: JSON.stringify({
      todoText,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset = UTF-8',
    },
  });

    const newTodo = await response.json();
  dispatch(addTodo(newTodo.todoText));
};
