let count=0;
let addBtn = document.querySelector(".addBtn");
let subBtn = document.querySelector(".subBtn");
let displayBtn = document.querySelector(".display");
let resetBtn = document.querySelector(".resetBtn");

addBtn.addEventListener("click",()=>{
    count++;
    displayBtn.innerText = count;
});
subBtn.addEventListener("click",()=>{
    count--;
    displayBtn.innerText = count;
});
resetBtn.addEventListener("click",()=>{
    count=0;
    displayBtn.innerText = count;
});