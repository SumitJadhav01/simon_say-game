let game = [];
let user = [];
let btn = ["red", "green", "orange", "golden"]
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function levelUp() {
    user = [];
    level++;
    h2.innerText = `Level ${level}`;
    let rdmIdx = Math.floor(Math.random() * 3);
    let rdmColor = btn[rdmIdx];
    let rdmbtn = document.querySelector(`.${rdmColor}`)
    game.push(rdmColor);
    btnFlash(rdmbtn);
}
function checkSeq(idx) {
    if (user[idx] == game[idx]) {
        if (user.length == game.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! <b>Your score was </b> ${level}<br> Press any key to start`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
    }
}
function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    user.push(userColor)
    checkSeq(user.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btns of allBtns) {
    btns.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    game = [];
    user = [];
    level = 0;
}