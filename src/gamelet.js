/* 
  Gamelet: A starting point for writing games.
  Author: Michael Corleone
  Version: 1.0
  Instructions:
  Include Gamelet.js in an HTML document containing
  an element with an ID of 'ball'.
  The script will detect when the left or right arrow
  key is pressed and will move the ball element accordingly.
*/

const ball = document.getElementById("ball"); // get the ball

document.addEventListener("keydown", handleKeyPress); // listen for keys

let positionX = 0; // set initial positions
let positionY = 0;

/* 
handleKeyPress
responds to certian key presses by updating postion
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionX -= 10;
  }
  if (e.code === "ArrowRight") {
    positionX += 10;
  }
  if (e.code === "ArrowUp") {
    positionY -= 10;
  }
  if (e.code === "ArrowDown") {
    positionY += 10;
  }
  // Prevents the ball from moving out of the left or top boundaries
  if (positionX < 0) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = 0;
  }
  refresh(); // reposition the ball
}

/* 
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}
