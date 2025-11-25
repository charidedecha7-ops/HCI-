// Room data
const roomsData = [
    {
        name: "Standard Room",
        image: "https://ambassadorhotelethiopia.com/wp-content/uploads/2020/10/standard-room-scaled.jpg",
        bed: "King",
        size: "21.70M²",
        occupancy: "2 Adults"
    },
    {
        name: "Standard Twin Room",
        image: "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Twin-Bed-scaled.jpg",
        bed: "Twin Beds",
        size: "26.72M²",
        occupancy: "2 Adults"
    },
    {
        name: "Deluxe Room",
        image: "https://ambassadorhotelethiopia.com/wp-content/uploads/2020/10/Deluxe-scaled.jpg",
        bed: "King",
        size: "42.8M²",
        occupancy: "2 Adults"
    },
    {
        name: "Executive Suite",
        image: "https://ambassadorhotelethiopia.com/wp-content/uploads/2020/10/Executive-6-scaled.jpg",
        bed: "King",
        size: "55.68M²",
        occupancy: "2 Adults"
    },
    {
        name: "Junior Presidential Suite",
        image: "https://ambassadorhotelethiopia.com/wp-content/uploads/2021/06/Ambassador-57561-scaled.jpg",
        bed: "King",
        size: "59.6M²",
        occupancy: "2 Adults"
    }
];

// Carousel images
const carouselImages = [
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2021/01/appartment-rooms-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2021/01/cooking-erya-presidental-suit-and-juniur-presidental-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/BL4A9210-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2021/01/jacuzzi-presidental-suit-and-juniur-presidential-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2020/10/standard-room-1024x685.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Juice-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Reciption-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Living-Room-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Bathroom-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Corridor-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/Kitchen-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/BL4A8530-1024x683.jpg",
    "https://ambassadorhotelethiopia.com/wp-content/uploads/2023/11/BL4A8951-1024x683.jpg"
];

// DOM Elements
const roomsGrid = document.querySelector('.rooms-grid');
const carouselTrack = document.querySelector('.carousel-track');
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');
const cookiePopup = document.getElementById('cookiePopup');
const manageCookiesBtn = document.getElementById('manageCookies');
const cookieOutBtn = document.getElementById('cookieOut');
const cookieInBtn = document.getElementById('cookieIn');
const cookieCancelBtn = document.getElementById('cookieCancel');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeRooms();
    initializeCarousel();
    initializeMobileMenu();
    initializeCookieManagement();
    initializeNewsletterForm();
});

// Initialize Rooms Section
function initializeRooms() {
    roomsData.forEach(room => {
        const roomCard = createRoomCard(room);
        roomsGrid.appendChild(roomCard);
    });
}

function createRoomCard(room) {
    const card = document.createElement('div');
    card.className = 'room-card';
    
    card.innerHTML = `
        <img decoding="async" src="${room.image}" alt="${room.name}" class="room-image">
        <div class="room-content">
            <h3 class="room-title">${room.name}</h3>
            <div class="room-details">
                <div class="detail-item">
                    <svg class="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    <span class="detail-label">Bed:</span> ${room.bed}
                </div>
                <div class="detail-item">
                    <svg class="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    <span class="detail-label">Size:</span> ${room.size}
                </div>
                <div class="detail-item">
                    <svg class="detail-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="detail-label">Occupancy:</span> ${room.occupancy}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize Carousel
function initializeCarousel() {
    let currentSlide = 0;
    
    // Create carousel slides
    carouselImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <figure>
                <img decoding="async" class="carousel-image" src="${image}" alt="Hotel image ${index + 1}">
            </figure>
        `;
        carouselTrack.appendChild(slide);
    });
    
    // Auto-play carousel
    let autoPlay = setInterval(nextSlide, 5000);
    
    // Navigation handlers
    carouselPrev.addEventListener('click', () => {
        clearInterval(autoPlay);
        prevSlide();
        autoPlay = setInterval(nextSlide, 5000);
    });
    
    carouselNext.addEventListener('click', () => {
        clearInterval(autoPlay);
        nextSlide();
        autoPlay = setInterval(nextSlide, 5000);
    });
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel();
    }
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
    }
    
    // Pause on hover
    const carousel = document.querySelector('.image-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
    carousel.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextSlide, 5000);
    });
}

// Mobile Menu
function initializeMobileMenu() {
    mobileToggle.addEventListener('click', toggleMobileMenu);
    
    function toggleMobileMenu() {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.style.display = isExpanded ? 'none' : 'block';
    }
}

// Cookie Management
function initializeCookieManagement() {
    manageCookiesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showCookiePopup();
    });
    
    cookieOutBtn.addEventListener('click', function() {
        setCookiePreference(false);
        hideCookiePopup();
    });
    
    cookieInBtn.addEventListener('click', function() {
        setCookiePreference(true);
        hideCookiePopup();
    });
    
    cookieCancelBtn.addEventListener('click', hideCookiePopup);
    
    function showCookiePopup() {
        cookiePopup.style.display = 'flex';
    }
    
    function hideCookiePopup() {
        cookiePopup.style.display = 'none';
    }
    
    function setCookiePreference(accepted) {
        const preference = accepted ? 'accepted' : 'rejected';
        document.cookie = `cookie_preference=${preference}; max-age=31536000; path=/`;
        
        if (accepted) {
            // Initialize analytics and other cookies
            initializeAnalytics();
        } else {
            // Remove tracking cookies
            removeTrackingCookies();
        }
    }
    
    function initializeAnalytics() {
        // Google Analytics initialization would go here
        console.log('Analytics initialized');
    }
    
    function removeTrackingCookies() {
        // Remove tracking cookies
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
}

// Newsletter Form
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (validateEmail(email)) {
            submitNewsletter(email);
        } else {
            showFormMessage('Please enter a valid email address.', 'error');
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function submitNewsletter(email) {
        // Simulate API call
        console.log('Submitting newsletter signup for:', email);
        
        showFormMessage('Thank you for subscribing to our newsletter!', 'success');
        
        // Reset form
        newsletterForm.reset();
    }
    
    function showFormMessage(message, type) {
        // Remove existing messages
        const existingMessage = newsletterForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.padding = '10px';
        messageEl.style.marginTop = '10px';
        messageEl.style.borderRadius = '5px';
        messageEl.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
        messageEl.style.color = type === 'success' ? '#155724' : '#721c24';
        messageEl.style.border = `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`;
        
        newsletterForm.appendChild(messageEl);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

// Lazy Loading for Images
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});