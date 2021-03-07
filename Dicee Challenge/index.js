const randomNumber1 = Math.trunc(Math.random() * 6 + 1);
const randomNumber2 = Math.trunc(Math.random() * 6 + 1);
console.log(randomNumber1);
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector(".container h1").innerHTML = "Draw";
}
