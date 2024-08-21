const dropdownContent = document.getElementsByClassName("dropdown-content")[0];
const dropbtn = document.getElementsByClassName("dropbtn")[0];

function toggleDropdown() {
  if (dropdownContent.style.height == 0) {
    dropdownContent.style.cssText = `
  opacity: 1;
  height: 20%;
  transition: height 0.2s;
  `;
    dropbtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' + " Menu";
  } else {
    dropdownContent.style.cssText = `
  height = 0;
  opacity: 0;
  `;
    dropbtn.innerHTML = '<i class="fa-solid fa-bars"></i>' + " Menu";
  }
}

// const dropbtn = document.getElementById("dropbtn");

// dropbtn.addEventListener("click", function () {
//   dropdownContent.style.display = "block";
// });
