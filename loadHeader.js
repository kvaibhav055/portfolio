document.addEventListener('DOMContentLoaded', () => {
    // Fetch the header content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Insert the header into the <header> tag
            document.querySelector('header').innerHTML = data;

            // Add event listener for the mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));
});
