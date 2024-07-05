let fah = document.querySelector(".fah");
let cel = document.querySelector(".cel");
let kel = document.querySelector(".kel");
let convertBtn = document.querySelector(".convertTemp");
let resetBtn = document.querySelector(".reset");

function reset(){
    cel.value = "";
    fah.value = "";
    kel.value = "";
}

function convertToCK(a){
    cel.value = ((a-32)*5)/9;
    kel.value = ((a-32)*5)/9 + 273.15;
}

function convertToFK(b){
    fah.value = (9/5)*b + 32;
    kel.value = b + 273.15;
}

function convertToFC(c){
    fah.value = (c-273.15)*(9/5) + 32; 
    cel.value = c-273.15; 
}

function conditionCheck(){
    let a = parseFloat(fah.value);
    let b = parseFloat(cel.value);
    let c = parseFloat(kel.value);

    if(!isNaN(a)){
        convertToCK(a);
    } else if(!isNaN(b)){
        convertToFK(b);
    } else if(!isNaN(c)){
        convertToFC(c);
    }
}

convertBtn.addEventListener("click",()=>{
    conditionCheck();
});

resetBtn.addEventListener("click",()=>{
    reset();
});
