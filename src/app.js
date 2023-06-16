/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

const suites = ["spade", "club", "heart", "diamond"];
let suite = suites[Math.floor(Math.random() * suites.length - 1)];

const cardFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let cardFace = cardFaces[Math.floor(Math.random() * cardFaces.length - 1)];

// if (suite == "spade" || "club") {
//   cardFace.style.color = red;
// } else {
//   cardFace.style.color = black;
// }

console.log(cardFace, suite);
