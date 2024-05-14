const { createStore, applyMiddleware } = require('redux');
const { delayMiddleware, thunkMiddleware } = require('./middleware');
const { fetchTodos } = require('./fetchData');

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
const store = createStore(reducerFuntion, applyMiddleware(thunkMiddleware));

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(fetchTodos);
