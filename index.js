// Add entry (Order section) ---------------------
const entry = document.getElementById("button");
const emptyWhile = document.getElementById("empty");
const prefer = document.getElementById("prefer_any");
const adding = document.getElementById("add_p");



entry.addEventListener("click", add);
let clickCount = 0;
function add() {
  var letters = /^[0-9a-zA-Z]+$/;
  if (prefer.value.match(letters) && prefer.value != "") {
    clickCount++;
    emptyWhile.classList.remove("hidden");
    const newP = document.createElement("p");
    const content = document.createTextNode(`${clickCount} ${prefer.value}`);
    adding.appendChild(newP);
    newP.appendChild(content);
    prefer.value = "";
  } else if (prefer.value == "") {
    alert("Input cannot be blank");
    prefer.value = "";
  } else {
    alert("Please input alphabet characters only");
    prefer.value = "";
  }
}

// // Plan choosing
// const planPro = document.getElementsByClassName('middle_btn');
// const clickedPlan = document.getElementsByClassName('this')
// planPro.addEventListener('click', chosen);
// function chosen(){

// }