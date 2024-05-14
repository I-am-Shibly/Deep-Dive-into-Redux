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

module.exports = { delayMiddleware };
