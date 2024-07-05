let display = document.querySelector(".display");
let roll = document.querySelector(".roll");
roll.addEventListener("click",()=>{
    rollDice();
});
function rollDice(){
    let a = Math.floor(Math.random() * 7); // Generate a random integer between 0 and 6
    display.innerText = a;
}