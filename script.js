let time = document.getElementById("timer");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let currntime = 0;
let startingtime = 0;
let timerInterval;

function startTimer() {
    startingtime = Date.now() - currntime;
    timerInterval = setInterval(calling, 10);

}
function calling() {
    currntime = Date.now() - startingtime;
    time.textContent = timefun(currntime);
}


function timefun(currntime) {
    const milliseconds = Math.floor((currntime % 1000) / 10);
    const seconds = Math.floor((currntime % (1000 * 60)) / 1000);
    const minutes = Math.floor((currntime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(currntime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}

function stopfun(){
    clearInterval(timerInterval);
}
function resetfun(){
    clearInterval(timerInterval);
    currntime = 0;
    time.textContent = "00:00:00";
}
startbtn.addEventListener("click", startTimer);
stopbtn.addEventListener("click" , stopfun);
resetbtn.addEventListener("click",resetfun);
