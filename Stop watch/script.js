let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let display = document.getElementById("display");

function start() {
  clearInterval(timer);
  timer = setInterval(() => {
    milliseconds += 10;
    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    display.innerHTML =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds) +
      ":" +
      (milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds);
  }, 10);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  display.innerHTML = "00:00:00:000";
}
