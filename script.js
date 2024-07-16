// JavaScript code can include functionality such as form validation, interactive elements, etc.
// Example: Add functionality to toggle a navigation menu for smaller screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-visible');
});
