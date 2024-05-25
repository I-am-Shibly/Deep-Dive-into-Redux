const store = require('./store');
const {counterActions} = require('./features/counters/counterSlice');

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());
