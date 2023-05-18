// Get references to HTML elements
const totalClicksElement = document.getElementById("total-clicks");
const clickImage = document.getElementById("click-image");
const autoClickerLevelElement = document.getElementById("auto-clicker-level");
const buyAutoClickerButton = document.getElementById("buy-auto-clicker");
const clickMultiplierLevelElement = document.getElementById("click-multiplier-level");
const buyClickMultiplierButton = document.getElementById("buy-click-multiplier");
const images = [
  'farm.jpg',
  'farm-sunset.png',
  'farm-nightt.png'
];

// Initialize variables
let totalClicks = 0;
let autoClickerLevel = 0;
let autoClickerCost = 200;
let clickMultiplierLevel = 0;
let clickMultiplierCost = 50;
let autoClickerInterval;
let currentImageIndex = 0;
let clicks = 0;



// Add event listeners
// When the mouse is pressed down on the click image, move the image down slightly
clickImage.addEventListener("mousedown", () => {
  clickImage.style.transform = "translateY(2px)";
});

// When the mouse is released on the click image, move the image back up to its original position
clickImage.addEventListener("mouseup", () => {
  clickImage.style.transform = "translateY(0)";
});

// When the click image is clicked, increase the total clicks by 1 plus the click multiplier level, and update the total clicks display
clickImage.addEventListener("click", () => {
  totalClicks += 1 + clickMultiplierLevel;
  updateTotalClicks();
});

// When the buy auto clicker button is clicked, subtract the cost from the total clicks and increase the auto clicker level by 1, start the auto clicker, and update the display elements
buyAutoClickerButton.addEventListener("click", () => {
  if (totalClicks >= autoClickerCost) {
    totalClicks -= autoClickerCost;
    autoClickerLevel++;
    autoClickerCost = 10 * (autoClickerLevel + 1) * 20;
    startAutoClicker();
    updateAutoClickerLevel();
    updateTotalClicks();
    buyAutoClickerButton.innerText = `Buy Auto Clicker (Cost: ${autoClickerCost})`;
  }
});


// When the buy click multiplier button is clicked, subtract the cost from the total clicks and increase the click multiplier level by 1, double the click multiplier cost, and update the display elements
buyClickMultiplierButton.addEventListener("click", () => {
  if (totalClicks >= clickMultiplierCost) {
    totalClicks -= clickMultiplierCost;
    clickMultiplierLevel++;
    clickMultiplierCost *= 2;
    updateClickMultiplierLevel();
    updateClickMultiplierCost();
    updateTotalClicks();
  }
});

// Define functions
// Start the auto clicker by setting a new interval, clearing any existing intervals first
function startAutoClicker() {
  if (autoClickerInterval) {
    clearInterval(autoClickerInterval);
  }
  autoClickerInterval = setInterval(() => {
    totalClicks += autoClickerLevel;
    updateTotalClicks();
  }, 1000);
}

// Update the total clicks display element
function updateTotalClicks() {
  totalClicksElement.innerText = totalClicks;
}

// Update the auto clicker level display element
function updateAutoClickerLevel() {
  autoClickerLevelElement.innerText = autoClickerLevel;
}

// Update the click multiplier level display element
function updateClickMultiplierLevel() {
  clickMultiplierLevelElement.innerText = clickMultiplierLevel;
}

// Update the click multiplier cost display element
function updateClickMultiplierCost() {
  buyClickMultiplierButton.innerText = `Buy Click Multiplier (Cost: ${clickMultiplierCost})`;
}

//background rotation

// define a function to change the background image
function changeBackgroundImage() {
  // get a reference to the body element
  const body = document.getElementsByTagName('body')[0];

  // set the background image to the current image URL and resize it to be full screen
  body.style.background = `url(${images[currentImageIndex]}) no-repeat center center fixed`;
  body.style.backgroundSize = 'cover';

  // increment the current image index, wrapping around to 0 if necessary
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// call the function once to set the initial background image
changeBackgroundImage();

// call the function every 5 minutes to change the background image
setInterval(changeBackgroundImage, 1 * 60 * 1000);

