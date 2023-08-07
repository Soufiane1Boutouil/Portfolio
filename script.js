// This is the JavaScript code for your portfolio website

// Function to toggle background color between blue and white
let isBlueBackground = true;
const toggleBackgroundColor = () => {
  const body = document.body;
  if (isBlueBackground) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "lightblue";
  }
  isBlueBackground = !isBlueBackground;
};

// Function to toggle navigation menu visibility
let isNavVisible = false;
const toggleNavVisibility = () => {
  const navMenu = document.querySelector(".nav-menu");
  if (isNavVisible) {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
  isNavVisible = !isNavVisible;
};

// Event listeners for button clicks
document.addEventListener("DOMContentLoaded", function() {
  const changeColorButton = document.getElementById("change-color-button");
  changeColorButton.addEventListener("click", toggleBackgroundColor);

  const toggleNavButton = document.getElementById("toggle-nav-button");
  toggleNavButton.addEventListener("click", toggleNavVisibility);
});
