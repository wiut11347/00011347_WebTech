// Add entry (Order section) ---------------------
const entry = document.getElementById("button");
const emptyWhile = document.getElementById("empty");
const prefer = document.getElementById("prefer_any");
const adding = document.getElementById("add_p");

entry.addEventListener("click", add);
let clickCount = 0;
function add() {
  var letters = /^[a-zA-Z\s]*$/;
  if (prefer.value.match(letters)) {
    clickCount++;
    emptyWhile.classList.remove("hidden");
    const newP = document.createElement("p");
    const content = document.createTextNode(`${clickCount}) ${prefer.value}`);
    adding.appendChild(newP);
    newP.appendChild(content);
    prefer.value = "";
  } else {
    alert("Please input alphabet characters only");
    prefer.value = "";
  }
}
