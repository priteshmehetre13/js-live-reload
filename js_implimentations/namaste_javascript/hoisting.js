try {
    getName();
    getName2();
    console.log(x);
    var x = 0;
  
    function getName() {
      console.log("I am in getName");
    }
    var getName2 = function () {
      console.log("I am in getName2");
    };
  } catch (e) {
    console.log(e);
  }
  