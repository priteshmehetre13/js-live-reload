function getFullName(homeTown, country) {
  return `My name is ${this.fullName} ${this.lastName}. I live in ${homeTown}, ${country}. `;
}

Function.prototype.myBindFunction = function (...args1) {
  let fn = this;
  const params = args1.slice(1);
  return function (...args2) {
    return fn.apply(args1[0], [...params, ...args2]);
  };
};

let fullUserName = {
  fullName: "Pritesh",
  lastName: "Mehetre",
};

let executeFullName = getFullName.myBindFunction(fullUserName, "Hadgaon");
console.log(executeFullName("India"));
