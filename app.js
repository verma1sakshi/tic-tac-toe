let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const resetGame = ()=>{
  count=0;
    enableBtn();
    turnO =true;
    msgcontainer.classList.add("hide");
}
let turnO = true; //false=X true=O

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let count=0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
      count++;
    } else {
      box.innerText = "X";
      turnO = true;
      count++;
    }
    box.disabled = true;
    checkWinner();
  });
});
// --btn disable--
const disableBtn= ()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
// ===enable btn===
const enableBtn= ()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

// ==define showWinner===
const showWinner=(winner)=>{
  msg.innerHTML =`Congratulations winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBtn();
}
// ==define for draw case
const draw=()=>{
  msg.innerHTML =`Match Draw`;
  msgcontainer.classList.remove("hide");
  disableBtn();
}
// ====define check winner====
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if ( pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
    if(count==9)
      {
        if(pos1val != pos2val && pos2val != pos3val)
          {
            draw();
          }
      }

  };
  resetBtn.addEventListener("click",resetGame);
 
};
