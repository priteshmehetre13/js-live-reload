function x() {
    console.log(a + " => x");
    function y() {
      console.log(a + " => y");
      function z() {
        b = 100;
        console.log(a + " => z");
        k = function k() {
          return a;
        };
      }
      z();
    }
    y();
  }
  
  var a = "I am in scope";
  x = x();
  console.log(b);
  console.log(k() + " outer");
  