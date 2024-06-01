const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('./features/counters/counterSlice');
const dynamicCounterReducer = require('./features/counters/dynamicCounter');
const todoReducer = require('./features/asyncAction/fetchPosts');
const { createLogger } = require('redux-logger');

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
    todos: todoReducer,
  },
  middleware: (defaultMiddlewares) => {
    return defaultMiddlewares().concat(createLogger());
  },
});

module.exports = store;
