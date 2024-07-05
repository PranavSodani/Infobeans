let count = 1;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let left = document.querySelector(".left");
let right = document.querySelector(".right");

function fetchImage(count) {

    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';


    switch (count) {
        case 1:
            img1.style.display = 'block';
            break;
        case 2:
            img2.style.display = 'block';
            break;
        case 3:
            img3.style.display = 'block';
            break;
        case 4:
            img4.style.display = 'block';
            break;
    }
}

fetchImage(count);

left.addEventListener("click", () => {
    if (count != 1) {
        count--;
        fetchImage(count);
    }
});

right.addEventListener("click", () => {
    if (count != 4) {
        count++;
        fetchImage(count);
    }
});
