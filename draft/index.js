const email = "aliaqarasikh@gmail.com";
const user = email.slice(0, email.indexOf("@"));
// console.log(user);

let myName = "      broCode  ";
myName =
  myName.trim().charAt(0).toUpperCase() + myName.trim().slice(1).toLowerCase();
console.log(myName);

let username;
document.getElementById("submit").onclick = function () {
  username = document.getElementById("username").value;
  if (Boolean(username)) {
    document.getElementById("myH1").textContent = `Welcome ${username}`;
    console.log(username);
  } else {
    window.alert("name can not be empty!");
  }
};
