// Target buttons
const colorBtn = document.getElementById('colorBtn');
const bounceBtn = document.getElementById('bounceBtn');

// Load saved color on refresh
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('buttonColor');
  if (savedColor) {
    colorBtn.style.backgroundColor = savedColor;
  }
});

// Change color & save to localStorage
colorBtn.addEventListener('click', () => {
  const newColor = colorBtn.style.backgroundColor === 'lightgreen' ? 'lightblue' : 'lightgreen';
  colorBtn.style.backgroundColor = newColor;
  localStorage.setItem('buttonColor', newColor);
});

// Bounce animation on hover
bounceBtn.addEventListener('mouseover', () => {
  bounceBtn.classList.add('bounce');
});

bounceBtn.addEventListener('animationend', () => {
  bounceBtn.classList.remove('bounce');
});
