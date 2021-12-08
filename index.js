// Add entry (Order section) ---------------------
const entry = document.getElementById("button");
const emptyWhile = document.getElementById("empty");
const prefer = document.getElementById("prefer_any");
const adding = document.getElementById("add_p");

entry.addEventListener("click", add);
let clickCount = 0;
const arrayPref = [];
function add() {
  var letters = /^[0-9a-zA-Z]+$/;
  if (prefer.value.match(letters) && prefer.value != "") {
    clickCount++;
    arrayPref.push(prefer.value);
    emptyWhile.classList.remove("hidden");
    adding.textContent = `(${arrayPref.length}) ${arrayPref} `;
    prefer.value = "";
  } else if (prefer.value == "") {
    alert("Input cannot be blank");
    prefer.value = "";
  } else {
    alert("Please input alphabet characters only");
    prefer.value = "";
  }
}

// Plan choosing
const choose = document.getElementsByClassName("choose");
function changeColor(package) {
  if (!package) {
    package = window.event;
  }

  var target = package.target || package.srcElement;
  target.style.backgroundColor = "black";
  target.textContent = "Chosen!";
  target.style.color = "white";
  choose.style.backgroundColor = "white";
}

// removing preferences
// function myFunction(event) {
//   const target = event.target;
//   target.classList.add('hidden');
// }
