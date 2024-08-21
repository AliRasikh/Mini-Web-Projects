let temp = document.getElementById("temperature");
const conversionType = document.getElementById("conversion-type");
const convertbtn = document.getElementById("convertbtn");
const c_f = document.getElementById("c-f");
const f_c = document.getElementById("f-c");
const result = document.getElementById("result");

convertbtn.addEventListener("click", function () {
  if (temp.value === "") {
    result.innerHTML = "Please enter a temperature value";
  } else if (c_f.checked) {
    let f = temp.value * 1.8 + 32;
    console.log(f);
    result.innerHTML = f + " F";
  } else if (f_c.checked) {
    let c = (temp.value - 32) / 1.8;
    result.innerHTML = c + " C";
  } else {
    result.innerHTML = "Please select a conversion type";
  }
});
