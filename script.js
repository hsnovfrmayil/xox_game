let elements = document.querySelectorAll(".element");
let menubar = document.querySelector(".menuBar");
let startButton = document.querySelector(".startButton");
let gameContainer = document.querySelector(".gameContainer");
let change = "X";
let newMassiv = 0;

startButton.addEventListener("click", clickStartButton);
function clickStartButton() {
  startButton.style.display = "none";
  gameContainer.style.display = "inline-block";
}

elements.forEach((element) => {
  element.addEventListener("click", clickElement);
  function clickElement(e) {
    console.log(e.target);
    if (element.textContent == "") {
      newMassiv++;
      console.log(newMassiv);
      if (change == "X") {
        element.textContent = `${change}`;
        change = "O";
      } else {
        element.textContent = change;
        change = "X";
      }
      menubar.textContent = `${change} playing`;
    } else {
      element.style.border = "2px solid red";
      setTimeout(() => {
        element.style.border = "1px solid black";
      }, "500");
    }
    checkWin();
  }
});

function checkWin() {
  rowWin(0);
  rowWin(3);
  rowWin(6);
  columnWin(0);
  columnWin(1);
  columnWin(2);
  diogonalOneWin();
  diogonalTwoWin();
}

function rowWin(i) {
  if (
    elements[i].textContent == elements[i + 1].textContent &&
    elements[i].textContent == elements[i + 2].textContent &&
    elements[i].textContent != ""
  ) {
    console.log("win");
    menubar.textContent = `${elements[i].textContent} WINNN`;
    change = "";
  }
}
function columnWin(i) {
  if (
    elements[i].textContent == elements[i + 3].textContent &&
    elements[i].textContent == elements[i + 6].textContent &&
    elements[i].textContent != ""
  ) {
    console.log("win");
    menubar.textContent = `${elements[i].textContent} WINNN`;
    change = "";
  }
}

function diogonalOneWin() {
  if (
    elements[0].textContent == elements[4].textContent &&
    elements[0].textContent == elements[8].textContent &&
    elements[0].textContent != ""
  ) {
    console.log("win");
    menubar.textContent = `${elements[0].textContent} WINNN`;
    change = "";
  }
}

function diogonalTwoWin() {
  if (
    elements[2].textContent == elements[4].textContent &&
    elements[2].textContent == elements[6].textContent &&
    elements[2].textContent != ""
  ) {
    console.log("win");
    menubar.textContent = `${elements[2].textContent} WINNN`;
    change = "";
  }
}
