import { ADD_DATA, DELETE } from './actionTypes';

const newId = (array) => {
  const newId = array.reduce((maxId, state) => Math.max(maxId, state.id), 0);
  return newId + 1;
};

export const reducerFunction = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_DATA:
      if (state.length < 3) {
        const { desFrom, desTo } = action.payload;
        if (desFrom !== desTo) {
          return [
            ...state,
            {
              id: newId(state),
              data: action.payload,
            },
          ];
        }
      }
      console.log(state);
      return state;

    case DELETE:
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
};
