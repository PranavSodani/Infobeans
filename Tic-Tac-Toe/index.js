let boxes = document.querySelectorAll(".inner-box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#new-game");
let countClick=0,flag=0;
let msgBtn = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turn0 = true;
    flag=0;
    enableBox();
    msgBtn.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
    });
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            box.style.color = "red";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "blue";
            turn0 = true;
        }
        countClick++;
        box.style.pointerEvents = "none";
        checkWinner();
        if(countClick == 9){
            if(flag == 0){
                resetGame();
                countClick=0;
            }
        }
    })
});
const disableBox = ()=>{
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}
const enableBox = ()=>{
    boxes.forEach((box) => {
        box.style.pointerEvents = "auto";
    });
}
const showWinner = (winner) => {
    flag++;
    disableBox();
    msg.innerText = `Congratulations, Our Winner is ${winner}`;
    msgBtn.classList.remove("hide");
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos1Val != "" && pos2Val != ""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);