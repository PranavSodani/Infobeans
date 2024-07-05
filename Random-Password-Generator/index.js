let lengthOfIn = document.querySelector(".inputPass");
let generate = document.querySelector(".generate");
let resetbtn = document.querySelector(".reset");
let lengthOfOut = document.querySelector(".finalPassword");
let finalPass = document.querySelector(".finalPass");
let s = "abcdefghijklmnopqrstuvwxyz123ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
let ans = "";

function adjustHeight() {
    finalPass.style.height = lengthOfOut.scrollHeight + "px";
}

generate.addEventListener("click", () => {
    let n = parseInt(lengthOfIn.value);
    ans = "";
    while (n-- > 0) {
        ans += s.charAt(Math.floor(Math.random() * s.length));
    }
    lengthOfOut.value = ans;
    adjustHeight();
});

resetbtn.addEventListener("click",()=>{
    lengthOfOut.value = "";
    lengthOfIn.value = "";
});