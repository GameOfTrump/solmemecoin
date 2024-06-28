const readFull = document.getElementById("readfull");
const readBox = document.getElementById("historytextid");

function toggleClass() {
    readBox.classList.toggle("historytextlong");
}

readFull.addEventListener("click", toggleClass);
