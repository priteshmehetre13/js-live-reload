if (typeof document !== "undefined") {
    document.body.innerHTML += `<button id="clieckMe">Click Me</button>`;
    function attachEventListener() {
      let counter = 0;
      document
        .getElementById("clieckMe")
        .addEventListener("click", function xyz() {
          console.log("Button Clicked => ", ++counter);
        });
    }
    attachEventListener();
  }
  