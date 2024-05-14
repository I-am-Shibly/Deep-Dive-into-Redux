const { createStore, applyMiddleware } = require('redux');
const { delayMiddleware } = require('./middleware');

const initialState = {
  todos: [],
};

const reducerFuntion = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case 'todos/todoLoaded':
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
  }
};

// store
const store = createStore(reducerFuntion, applyMiddleware(delayMiddleware));

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Learn Redux',
});
