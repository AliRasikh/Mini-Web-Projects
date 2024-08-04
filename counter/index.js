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
