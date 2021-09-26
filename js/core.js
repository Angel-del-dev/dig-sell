import { createBoard } from "./board.js";
import { selectRewards } from "./rewarding.js";
import { getRewards } from "./minner.js";
import { gameOver } from "./gameOver.js";

// Generating the board 5 x 5 grid
createBoard();
const rewardsAll = selectRewards();
const currRewards = selectRewards();

document.getElementById("board").addEventListener("click", (e) => {
  e.target.classList.remove("ground");
  getRewards(e.target, currRewards);
});

document.getElementById("finish").addEventListener("click", () => {
    gameOver(rewardsAll);
});
