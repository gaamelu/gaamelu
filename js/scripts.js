/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Select the card container element
    const cardContainer = document.querySelector('.card-container');

    // Set the maximum number of cards per page
    const cardsPerPage = 3;

    // Select all the card elements
    const cards = cardContainer.querySelectorAll('.card');

    // Calculate the total number of pages
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    // Function to display the cards for a given page
    function displayCards(page) {
        // Calculate the start and end indices for the cards to be displayed
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        // Loop through all the cards and show only those within the index range
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to create the pagination links
    function createPagination(totalPages) {
        // Select the pagination element
        const pagination = document.querySelector('.pagination');

        // Loop through all the pages and create a link for each one
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.classList.add('page-link');
            link.href = '#projects';
            link.textContent = i;
            li.classList.add('page-item');
            li.appendChild(link);
            pagination.appendChild(li);

            // Add a click event listener to each link to display the corresponding page
            link.addEventListener('click', event => {
                // Prevent the default behavior of the link
                // event.preventDefault();

                displayCards(i);
            });
        }
    }

    // Display the first page of cards by default
    displayCards(1);

    // Create the pagination links
    createPagination(totalPages);
});
