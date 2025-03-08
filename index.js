document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.getElementById('searchBar');
    const contentSections = document.querySelectorAll('.actual-body section');
    const noMatchMessage = document.createElement('p');
    
    noMatchMessage.style.color = '#ff0000';
    noMatchMessage.style.marginTop = '1rem';
    document.body.insertBefore(noMatchMessage, document.querySelector('main'));

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let isMatchFound = false;

        contentSections.forEach(section => {
            const sectionContent = section.textContent.toLowerCase();
            if (sectionContent.includes(searchTerm)) {
                section.style.display = 'block';
                isMatchFound = true;
            } else {
                section.style.display = 'none';
            }
        });

        if (!isMatchFound && searchTerm !== '') {
            noMatchMessage.textContent = `No results found for "${searchTerm}".`;
        } else {
            noMatchMessage.textContent = '';
        }

        if (searchTerm === '') {
            contentSections.forEach(section => {
                section.style.display = 'block';
            });
            noMatchMessage.textContent = '';
        }
    });

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Resume download functionality
    function downloadRESUME() {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1hN3PdvMzuEg54XZLAd9e7nII3aedXw7z/view?usp=drive_link';  // Replace with your PDF file path
        link.download = 'MyResume.pdf';  // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Example: Add an event listener to a button for resume download
    const resumeButton = document.getElementById('resumeButton'); // Add this ID to your resume button
    if (resumeButton) {
        resumeButton.addEventListener('click', downloadRESUME);
    }
});
