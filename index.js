function receivesAFunction(spy) {
  return spy();
}

function returnsANamedFunction() {
  return function fn() {};
}
function returnsAnAnonymousFunction() {
  return () => {};
}
