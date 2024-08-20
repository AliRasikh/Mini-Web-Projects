const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const countLabel = document.getElementById("count");
let count = 0;

decreaseBtn.onclick = function () {
  console.log(count);
  count--;
  countLabel.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
