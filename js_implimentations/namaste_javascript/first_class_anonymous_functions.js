//Function Statement or Function Declaration
function a() {
  console.log("Function Statement is called");
}

//Function Expression
var k = function () {
  console.log("Function Expression or Function Declaration is called");
};

//Ananomous Function
(function () {
  console.log("Ananomous Function is called");
})();
//Named function expression
var x = function y() {
  console.log("Named function expression is called");
};
// difference between parammeters and arguments
function v(prama1, param2) {
  console.log(`arguments are called d=> ${prama1} f=> ${param2}`);
}
// passing arguments to function
v(1, 2);

//First class functions or First class citizens => ability of functions to be used as variables/values and can be passed and returened from another functions
const Arithmetics = {
  add: (a, b) => {
    return `${a} + ${b} = ${a + b}`;
  },
  subtract: (a, b) => {
    return `${a} - ${b} = ${a - b}`;
  },
  multiply: (a, b) => {
    return `${a} * ${b} = ${a * b}`;
  },
  division: (a, b) => {
    if (b != 0) return `${a} / ${b} = ${a / b}`;
    return `Cannot Divide by Zero!!!`;
  },
};

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));
