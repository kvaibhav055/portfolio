document.addEventListener('DOMContentLoaded', () => {
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
});
