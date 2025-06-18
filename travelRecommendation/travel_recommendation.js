document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const homePage = document.getElementById('home-page');
    const aboutPage = document.getElementById('about-page');
    const contactPage = document.getElementById('contact-page');
    const recommendationsPage = document.getElementById('recommendations-page');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultsContainer = document.getElementById('results-container');
    const recommendationsTitle = document.getElementById('recommendations-title');
    const exploreBtn = document.querySelector('.explore-btn');
    const contactForm = document.getElementById('contact-form');

    const travelData = {
        beaches: [
            {
                name: "Whitehaven Beach, Australia",
                description: "With its 98% pure silica sand and crystal-clear turquoise waters, Whitehaven Beach in the Whitsunday Islands is consistently ranked as one of the world's most beautiful beaches.",
                imageUrl: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
                timeZone: "Australia/Brisbane"
            },
            {
                name: "Anse Source d'Argent, Seychelles",
                description: "Famous for its pink-hued sands, dramatic granite boulders, and shallow, calm waters, this beach on La Digue island is a photographer's paradise.",
                imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
                timeZone: "Indian/Mahe"
            },
            {
                name: "Navagio Beach, Greece",
                description: "Also known as Shipwreck Beach, this stunning cove on Zakynthos island features a rusting shipwreck on its white sandy shore surrounded by towering cliffs and bright blue waters.",
                imageUrl: "https://images.unsplash.com/photo-1571021785662-712e369a2829?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                timeZone: "Europe/Athens"
            }
        ],
        temples: [
            {
                name: "Angkor Wat, Cambodia",
                description: "The largest religious monument in the world, this 12th-century temple complex is the crown jewel of Khmer architecture and a UNESCO World Heritage site.",
                imageUrl: "https://plus.unsplash.com/premium_photo-1661963188432-5de8a11f21a7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                timeZone: "Asia/Phnom_Penh"
            },
            {
                name: "Prambanan, Indonesia",
                description: "This 9th-century Hindu temple complex in Java features towering spires and intricate bas-reliefs depicting scenes from the Ramayana epic.",
                imageUrl: "https://plus.unsplash.com/premium_photo-1700954824012-08ce5362e6c6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                timeZone: "Asia/Jakarta"
            },
            {
                name: "Golden Temple, India",
                description: "The holiest shrine of Sikhism, this stunning temple in Amritsar appears to float on a sacred pool, with its gold-plated upper floors gleaming in the sunlight.",
                imageUrl: "https://plus.unsplash.com/premium_photo-1697730331435-92e07494db43?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                timeZone: "Asia/Kolkata"
            }
        ],
        countries: [
            {
                name: "Japan",
                description: "A fascinating blend of ancient traditions and cutting-edge technology, Japan offers everything from serene temples and cherry blossoms to neon-lit cities and bullet trains.",
                imageUrl: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
                timeZone: "Asia/Tokyo"
            },
            {
                name: "Italy",
                description: "From the romantic canals of Venice to the ancient ruins of Rome and the rolling hills of Tuscany, Italy is a feast for the senses with its art, architecture, and cuisine.",
                imageUrl: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
                timeZone: "Europe/Rome"
            },
            {
                name: "Australia",
                description: "A vast continent-country with diverse landscapes ranging from the Great Barrier Reef and Outback deserts to cosmopolitan cities like Sydney and Melbourne.",
                imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
                timeZone: "Australia/Sydney"
            }
        ]
    };

    function showPage(pageToShow) {
        homePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        contactPage.classList.add('hidden');
        recommendationsPage.classList.add('hidden');

        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');

        pageToShow.classList.remove('hidden');

        if (pageToShow === homePage) {
            homeLink.classList.add('active');
        } else if (pageToShow === aboutPage) {
            aboutLink.classList.add('active');
        } else if (pageToShow === contactPage) {
            contactLink.classList.add('active');
        }
    }

    // Navigation event listeners
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        showPage(homePage);
    });

    aboutLink.addEventListener('click', function (e) {
        e.preventDefault();
        showPage(aboutPage);
    });

    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        showPage(contactPage);
    });

    exploreBtn.addEventListener('click', function () {
        showPage(homePage);
        searchInput.focus();
    });

    searchBtn.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (!searchTerm) {
            alert('Please enter a search term (beach, temple, or country)');
            return;
        }

        let results = [];
        let category = '';

        if (searchTerm.includes('beach') || searchTerm === 'beaches') {
            results = travelData.beaches;
            category = 'Beaches';
        } else if (searchTerm.includes('temple') || searchTerm === 'temples') {
            results = travelData.temples;
            category = 'Temples';
        } else if (searchTerm.includes('country') || searchTerm === 'countries') {
            results = travelData.countries;
            category = 'Countries';
        } else {
            showNoResults();
            return;
        }

        displayResults(results, category);
    });

    function displayResults(results, category) {
        homePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        contactPage.classList.add('hidden');
        recommendationsPage.classList.remove('hidden');

        recommendationsTitle.textContent = `${category} Recommendations`;

        resultsContainer.innerHTML = '';

        results.forEach(destination => {
            const destinationCard = document.createElement('div');
            destinationCard.className = 'destination-card';

            const options = {
                timeZone: destination.timeZone,
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };

            const destinationTime = new Date().toLocaleTimeString('en-US', options);
            const destinationDate = new Date().toLocaleDateString('en-US', options);

            destinationCard.innerHTML = `
                <img src="${destination.imageUrl}" alt="${destination.name}" class="destination-img">
                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <p class="time-info">Current time: ${destinationTime}<br>${destinationDate}</p>
                </div>
            `;

            resultsContainer.appendChild(destinationCard);
        });
    }

    function showNoResults() {
        homePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        contactPage.classList.add('hidden');
        recommendationsPage.classList.remove('hidden');

        recommendationsTitle.textContent = 'No Results Found';

        resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No destinations found for your search. Try "beach", "temple", or "country".</p>
            </div>
        `;
    }

    resetBtn.addEventListener('click', function () {
        searchInput.value = '';
        showPage(homePage);
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message! We will get back to you soon.');

        contactForm.reset();

        showPage(homePage);
    });

    showPage(homePage);
});
