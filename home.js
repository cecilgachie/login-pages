document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar ul li a');
    const pages = document.querySelectorAll('.page');

    // Function to show the active page
    const showPage = (pageId) => {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
    };

    // Add event listeners to links
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Show the home page by default
    showPage('home');
});