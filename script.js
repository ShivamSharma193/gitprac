document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    console.log("Website loaded!");

    // Example: Display current year in the footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
