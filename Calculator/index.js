let btn0 = document.querySelector(".btn0");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");
let dec = document.querySelector(".decimal");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let back = document.querySelector(".back");
let display = document.querySelector(".inner-box1");

let ans = "";

function updateDisplay() {
    display.innerText = ans;
}

function calAns() {
    let result = eval(ans);
    result = result.toFixed(2);
    display.innerText = result;
}

[btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, add, sub, mul, div, dec].forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains('btn0') || button.classList.contains('btn1') || button.classList.contains('btn2') || button.classList.contains('btn3') || button.classList.contains('btn4') || button.classList.contains('btn5') || button.classList.contains('btn6') || button.classList.contains('btn7') || button.classList.contains('btn8') || button.classList.contains('btn9') || button.classList.contains('decimal')) {
            ans += button.innerText;
        } else {
            ans += ' ' + button.innerText + ' ';
        }
        updateDisplay();
    });
});

clear.addEventListener("click", () => {
    ans = "";
    updateDisplay();
});

back.addEventListener("click", () => {
    ans = ans.substring(0, ans.length - 1);
    updateDisplay();
});

equal.addEventListener("click", calAns);
