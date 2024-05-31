const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('./features/counters/counterSlice');
const dynamicCounterReducer = require('./features/counters/dynamicCounter');

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
});

module.exports = store;
