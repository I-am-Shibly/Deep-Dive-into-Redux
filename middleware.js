const delayMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/todoAdded') {
    console.log('wait 2 seconds for dispatching action.');

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  next(action);
};

module.exports = {
    delayMiddleware, thunkMiddleware
}