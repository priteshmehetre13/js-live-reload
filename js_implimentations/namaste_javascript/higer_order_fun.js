const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

let circles = [1, 2, 3, 4, 5, 6];

// here as we can see function has the logic and we are passing it as a parameter which is higher order function
console.log(circles.map(area));
console.log(circles.map(diameter));
console.log(circles.map(circumference));
