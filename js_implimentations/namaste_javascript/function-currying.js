// function currying by bind
function functionCurryingByBind(x, y) {
  return x * y;
}

let multipyByTwoBind = functionCurryingByBind.bind(this, 2);
console.log(multipyByTwoBind(3));
let multipyByThreeBind = functionCurryingByBind.bind(this, 3);
console.log(multipyByThreeBind(4));

console.log("--------------------------");

// function currying by closure
let functionCurryingByClosure = function (x) {
  return function (y) {
    return x * y;
  };
};

var multipyByTwoClosure = functionCurryingByClosure(2);
console.log(multipyByTwoClosure(3));
var multipyByThreeClosure = functionCurryingByClosure(3);
console.log(multipyByThreeClosure(4));
