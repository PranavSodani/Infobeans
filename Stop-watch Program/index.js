let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let a = parseInt(hour.innerText);
let b = parseInt(minute.innerText);
let c = parseInt(second.innerText);
let count = c;
let check = true;
function Reset() {
    a = 0;
    b = 0;
    c = 0;
    count = 0;
    second.innerText = a.toString().padStart(2, '0');
    minute.innerText = b.toString().padStart(2, '0');
    hour.innerText = c.toString().padStart(2, '0');
}
function startTimer() {
    if (check) {
        count++;
        if (count === 60) {
            count = 0;
            b++;
            if (b === 60) {
                b = 0;
                a++;
                if (a === 24) {
                    a = 0;
                }
                hour.innerText = a.toString().padStart(2, '0');
            }
            minute.innerText = b.toString().padStart(2, '0');
        }
        second.innerText = count.toString().padStart(2, '0'); // Update second with the current value of count
        setTimeout(startTimer, 1000);
    }
}
start.addEventListener("click", () => {
    check = true;
    startTimer();
    start.disabled = true;
});
stop.addEventListener("click", () => {
    check = false;
    start.disabled = false;
});
reset.addEventListener("click", () => {
    check = true;
    start.disabled = false;
    Reset();
});
