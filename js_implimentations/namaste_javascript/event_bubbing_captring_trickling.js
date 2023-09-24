if (typeof document !== "undefined") {
    document.body.innerHTML += `<div id="grandParent"><div id="parent"><div id="child"></div></div></div>`;
    let divElemnts = document.querySelectorAll("div");
    for (let divNum = 0; divNum < divElemnts.length; divNum++) {
      divElemnts[divNum].style.minWidth = "100px";
      divElemnts[divNum].style.minHeight = "100px";
      divElemnts[divNum].style.padding = "30px";
      divElemnts[divNum].style.border = "1px solid black";
    }
  
    document.querySelector("#grandParent").addEventListener(
      "click",
      function () {
        console.log("grandParent is clicked");
      },
      false
    );
    document.querySelector("#parent").addEventListener(
      "click",
      function (e) {
        console.log("parent is clicked");
        // e.stopPropagation();
      },
      false
    );
    document.querySelector("#child").addEventListener(
      "click",
      function () {
        console.log("child is clicked");
      },
      false
    );
  }
  