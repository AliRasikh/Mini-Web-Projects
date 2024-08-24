// *** desktop dropdown menu
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

// *** phone side menu
const phoneSideMenu = document.getElementById("phone-side-menu");
let selectAll = document.getElementsByClassName("select-all")[0];

function toggleSideMenu() {
  console.log("toggleSideMenu");
  phoneSideMenu.style.cssText = `
    width: 30%;
    transition: width 0.2s;
    `;

  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
  selectAll.style.opacity = "0.5";
}

selectAll.onclick = function () {
  console.log("selectAll.onclick");
  phoneSideMenu.style.width = 0;
  phoneSideMenu.style.cssText = `
    width: 0;
    transition: width 0.2s;
    `;

  document.body.style.height = "auto";
  document.body.style.overflow = "auto";
  selectAll.style.opacity = "1";
};
