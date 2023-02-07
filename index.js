let div = document.getElementById("wrap");
let span = document.getElementById("color");
let btn = document.getElementById("btn");
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (i = 1; i <= 6; i++) {
    hexColor += randHex();
  }
  div.style.backgroundColor = hexColor;
  span.innerText = hexColor;
});

function randHex() {
  let randIndex = Math.floor(Math.random() * 16);
  return hex[randIndex];
}
