var a = 1000;
let b = 101;

{
  var a = 100;
  let b = 99;
  const c = 88;
  console.log(a);
  console.log(b);
  console.log(b);
}

console.log(a);
console.log(b);
