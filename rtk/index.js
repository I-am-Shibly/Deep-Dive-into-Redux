const store = require('./store');
const { counterActions } = require('./features/counters/counterSlice');
const { dynamicCounterActions } = require('./features/counters/dynamicCounter');
const { fetchTodos } = require('./features/asyncAction/fetchPosts');

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterActions.dynamicIncrement(2));
// store.dispatch(dynamicCounterActions.dynamicIncrement(1));
// store.dispatch(dynamicCounterActions.dynamicDecrement(3));

store.dispatch(fetchTodos())
