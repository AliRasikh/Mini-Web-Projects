// const readline = require("readline");

// start() : startTime
//stop() : finishTime
//duration : finishTime - startTime
// reset(): loop again

function SW() {
  let startTime,
    endTime,
    running = false,
    duration = 0;
  this.start = function () {
    // console.log(running);
    if (running) throw new error("sw is already running");
    startTime = Date.now();
    running = true;
    console.log(startTime);
  };
  this.stop = function () {
    if (!running) throw new error("sw is not running");
    endTime = Date.now();
    console.log(endTime);
    running = false;
    duration = endTime - startTime;
  };
  this.reset = function () {
    running = false;
  };
  this.getDuration = function () {
    return duration;
  };
}

let sw = new SW();
// sw.stop();
sw.start();
setTimeout(function () {
  // Code to be executed after 100 milliseconds
}, 1000);
sw.stop();
console.log(sw.getDuration());
// sw.reset();
// sw.start();

// sw.start();
// setTimeout(function () {
//   // Code to be executed after 100 milliseconds
// }, 10000);
// sw.stop();
// console.log(sw.duration);

// let key;
// process.stdout.write("Enter Your Name: ");
// // console.log("Enter 1 to start and 2 to stop: ");
// process.stdin.on("data", (data) => {
//   key = parseInt(data.toString().trim(), 10);
//   console.log(key);
//   //   console.log(typeof key);

//   process.exit();
// });

// console.log("sdfsdfsd" + key);

// switch (key) {
//   case 1:
//     sw.start();
//     break;
//   case 2:
//     sw.stop();
//     console.log(sw.duration);
//     break;
//   default:
//     console.log("Invalid input");
//     break;
// }

// console.log(sw.duration);
