// Update the footer with the current year
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Smooth scrolling back to top
const backToTopBtn = document.getElementById('back-to-top');
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get all the social media links
const socialIcons = document.querySelectorAll('.social-icons a');

// Add click event to each icon
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior
        const platform = this.querySelector('img').alt;  // Get the platform name from alt attribute
        alert(`You clicked on the ${platform} icon!`);  // Show alert with the platform name
        // Uncomment the next line if you want to navigate to the link after the alert
        // window.location.href = this.href;
    });
});












// Toggle dropdown menu visibility
const contactBtn = document.getElementById('contact-btn');
const contactOptions = document.getElementById('contact-options');

contactBtn.addEventListener('click', function() {
    contactOptions.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#contact-btn')) {
        if (contactOptions.classList.contains('show')) {
            contactOptions.classList.remove('show');
        }
    }
});
