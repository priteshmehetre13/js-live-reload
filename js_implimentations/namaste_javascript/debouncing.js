if (typeof document !== "undefined") {
  document.body.innerHTML += `<input type='text' id="searchInput">`;
  const delay = 400;
  document.getElementById("searchInput").onkeyup = function () {
    betterFunction("called");
  };
  const debounce = function (fn, delay) {
    let timer;
    return function (...args) {
      let self = this;
      let context = args;
      clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(self, context);
      }, delay);
    };
  };

  function getData(state) {
    console.log(document.getElementById("searchInput").value);
    console.log(`--------${state} after delay of ${delay} ms --------`);
  }
  const betterFunction = debounce(getData, delay);
}
