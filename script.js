//your JS code here. If required.
// Get elements
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// Function to set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Function to get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

// Apply styles using CSS variables
function applyPreferences(size, color) {
  if (size) {
    document.documentElement.style.setProperty("--fontsize", size + "px");
  }
  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
  }
}

// Load saved preferences on page load
window.onload = function () {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    fontSizeInput.value = savedSize;
  }

  if (savedColor) {
    fontColorInput.value = savedColor;
  }

  applyPreferences(savedSize, savedColor);
};

// Save preferences on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const size = fontSizeInput.value;
  const color = fontColorInput.value;

  // Save cookies
  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  // Apply immediately
  applyPreferences(size, color);
});