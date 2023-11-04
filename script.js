/* script.js */

// Example: Change background color on click
const body = document.body;
const colors = ['#E74C3C', '#3498DB', '#27AE60', '#F1C40F', '#8E44AD'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add more JavaScript code for your interactive features
