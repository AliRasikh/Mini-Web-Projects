const randomNumberLabel1 = document.getElementById("randomNumLabel1");
const randomNumberLabel2 = document.getElementById("randomNumLabel2");
const randomNumberLabel3 = document.getElementById("randomNumLabel3");
const generateBtn = document.getElementById("generateBtn");

// let randomNum;

// const min = 10;
// const max = 20;
// let generateRandomNumMinMax = function () {
//   randomNum = Math.round(Math.random() * (max - min)) + min;
//   console.log(randomNum);
// };

generateBtn.onclick = function () {
  randomNumberLabel1.textContent = generateRandom();
  randomNumberLabel2.textContent = generateRandom();
  randomNumberLabel3.textContent = generateRandom();
};

let generateRandom = function () {
  let max = 6;
  return Math.floor(Math.random() * max) + 1;
};

//#2
const subscribeBtn = document.getElementById("subscribeBtn");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const submit = document.getElementById("submitBtn");
const message = document.getElementById("message");

submit.onclick = function () {
  // if (subscribeBtn.checked) {
  //   message.textContent = "You are subscribed";
  // }
  subscribeBtn.checked
    ? (message.textContent = "You are subscribed")
    : (message.textContent = "You are NOT subscribed");
};
