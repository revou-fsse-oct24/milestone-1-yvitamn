const slides = document.querySelectorAll('.unisex-shirt-card');
const totalSlides = slides.length;
let currentSlide = 0;

// Get the fraction display element
const fractionDisplay = document.getElementById('fractionDisplay');

// Function to update the slider display and fraction
function updateSlider() {
  // Update the slider position
  const slider = document.querySelector('.unisex-shirt-slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update the fraction display (e.g., 2/8)
  fractionDisplay.textContent = `${currentSlide + 1} / ${totalSlides}`;
}

// Function for the "Next" button
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// Function for the "Previous" button
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Event listeners for the buttons
document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);

// Initialize the slider
updateSlider();


// // JavaScript for handling dropdown selection
// document.getElementById("shop").addEventListener("change", function() {
//   const value = this.value;
//   if (value === "shop") {
//       window.location.href = "indeks.html"; 
//   } else if (value === "new") {
//       window.location.href = "new.html"; 
//   } else if (value === "dresses") {
//       window.location.href = "dresses.html"; 
//   } else if (value === "sets") {
//       window.location.href = "sets.html"; 
//   }
// });