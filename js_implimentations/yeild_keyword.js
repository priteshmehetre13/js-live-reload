/**
 * 
 * @param yield keyword is used to resume or pause a generator function asynchronously. A generator function is just like a normal function but the difference is that whenever the function is returning any value, it does it with the help of ‘yield’ keyword instead of return it. Yield can’t be called from nested functions or from callbacks.

The yield expression returns an object with two properties, “value” which is the actual value and “done” which is a boolean value, it returns true when generator function is full completed else it returns false.

If we pause the yield expression, the generator function will also get paused and resumes only when we call the next() method. When the next() method is encountered the function keeps on working until it faces another yield or returns expression.} i 
 */


function* showPrices(i) {
  console.log("Pritesh is trying Yeild");
    while (i < 3) {
      yield i++;
    }
  }
  
  //creating an object for our function showPrices
  const gfg = showPrices(0);
  
  //return 0 because 0 value is passed to the showPrices yield expression
  console.log(gfg.next().value);
  
  // return 1
  // console.log(gfg.next().value);
  
  //return 2
  // console.log(gfg.next().value);
  