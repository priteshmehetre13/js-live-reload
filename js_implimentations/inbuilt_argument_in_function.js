/**
 * The Arguments Object
JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers:
 * @returns max number
 */
function findMax() {
    let max = -Infinity;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  
  findMax(4, 5, 6);
  