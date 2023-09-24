if (typeof document !== "undefined") {
  document.body.innerHTML += `<div id='form'><input type='text' id='name' data-uppercase><input type='text' id='pan'><input type='text' id='mobile'></div><div id="category"><ul><li id='laoptop'>laoptop</li><li id='camera'>camera</li><li id='shoes'>shoes</li></ul></div>`;

  document.querySelector("#category").addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        console.log(e.target.id);
      }
    },
    false
  );

  // javascript behavior pattern
  document.querySelector("#form").addEventListener(
    "keyup",
    function (e) {
      if (e.target.dataset.uppercase !== undefined) {
        e.target.value = e.target.value.toUpperCase();
        console.log(e.target.id);
      }
    },
    false
  );
}
