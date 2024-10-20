// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", function() {
    const projectRows = document.querySelectorAll('.project-row');

    function fadeInElements() {
        projectRows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                row.classList.add('fade-in'); // Add fade-in class when in viewport
            }
        });
    }

    // Initial check
    fadeInElements();

    // Check on scroll
    window.addEventListener('scroll', fadeInElements);
});



// Listen to scroll events and trigger the fade-in effect
window.addEventListener('scroll', handleScroll);

// Optionally, trigger fade-in when the page first loads
document.addEventListener('DOMContentLoaded', handleScroll);


document.addEventListener("DOMContentLoaded", function() {
    const thaiLang = document.getElementById('thaiLang');
    const englishLang = document.getElementById('englishLang');

    // Function to load content based on the selected language
    function loadLanguageContent() {
        const lang = localStorage.getItem('language') || 'english'; // Default to English

        if (lang === 'thai') {
            document.querySelector('.greeting').textContent = 'สวัสดี';
            document.querySelector('.description').textContent = 'นี่คือเนื้อหาในภาษาไทย';
        } else {
            document.querySelector('.greeting').textContent = 'Hello';
            document.querySelector('.description').textContent = 'This is content in English.';
        }
    }

    // Load the content on page load
    loadLanguageContent();

    // Event listeners for language toggle
    thaiLang.addEventListener('click', function() {
        localStorage.setItem('language', 'thai'); // Save selected language
        loadLanguageContent(); // Load Thai content
    });

    englishLang.addEventListener('click', function() {
        localStorage.setItem('language', 'english'); // Save selected language
        loadLanguageContent(); // Load English content
    });
});

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }

        // Function to add the fade-in class
        function fadeInOnScroll() {
            const profileContainer = document.querySelector('.profile-container');
            const profilePicture = profileContainer.querySelector('.profile-picture');
            const introText = profileContainer.querySelector('.intro-text');

            if (isInViewport(profileContainer)) {
                profilePicture.classList.add('fade-in');
                introText.classList.add('fade-in');
            }
        }

// Event listener for scroll event
window.addEventListener('scroll', fadeInOnScroll);

// Call the function on page load
document.addEventListener('DOMContentLoaded', fadeInOnScroll);


// Function to check if the element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add fade-in effect on scroll
window.addEventListener('scroll', function() {
    const skillTitle = document.querySelector('.my_skill');
    const skillImages = document.querySelectorAll('.skill-picture');
    const skillText = document.querySelector('.skill_text');
    const skillListItems = document.querySelectorAll('.skill_text ul li');

    // Add fade-in class if in viewport
    if (isInViewport(skillTitle)) {
        skillTitle.classList.add('fade-in');
    }

    skillImages.forEach(image => {
        if (isInViewport(image)) {
            image.classList.add('fade-in');
        }
    });

    if (isInViewport(skillText)) {
        skillText.classList.add('fade-in');
    }

    skillListItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('fade-in');
        }
    });
});






function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


document.addEventListener("DOMContentLoaded", function() {
    const projectRows = document.querySelectorAll('.project-row');

    function fadeInElements() {
        projectRows.forEach(row => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                row.classList.add('fade-in'); // Add fade-in class when in viewport
            }
        });
    }

    // Initial check
    fadeInElements();

    // Check on scroll
    window.addEventListener('scroll', fadeInElements);
});

// Function to check if element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener("DOMContentLoaded", function () {
        const fadeElements = document.querySelectorAll('.exp-card');

        function fadeInOnScroll() {
            fadeElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight;

                if (elementPosition < screenPosition) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll(); // Initial check in case elements are already in view
    });
    
// Fade-in effect on scroll
window.addEventListener('scroll', function() {
    const certificates = document.querySelectorAll('.certificate-container');
    const certificateTitle = document.querySelector('.my_cert'); // Target the certificate title
    
    // Apply fade-in to the h1 when in viewport
    if (isInViewport(certificateTitle)) {
        certificateTitle.classList.add('fade-in');
    }

    certificates.forEach(certificate => {
        if (isInViewport(certificate)) {
            certificate.classList.add('fade-in');
        }
    });
});

// Trigger fade-in for elements already in view when the page loads
window.addEventListener('load', function() {
    const certificates = document.querySelectorAll('.certificate-container');
    const certificateTitle = document.querySelector('.my_cert'); // Target the certificate title
    
    // Apply fade-in to the h1 when in viewport
    if (isInViewport(certificateTitle)) {
        certificateTitle.classList.add('fade-in');
    }

    certificates.forEach(certificate => {
        if (isInViewport(certificate)) {
            certificate.classList.add('fade-in');
        }
    });
});

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll and apply the transition
window.addEventListener('scroll', function() {
    const linkedinIcon = document.querySelector('.icon');
    const linkedinLogo = document.querySelector('.linkedin-logo');

    console.log('Scroll event fired'); // Debugging line

    // Check if the contact section is in the viewport
    if (isInViewport(linkedinIcon)) {
        console.log('Icon is in viewport'); // Debugging line
        linkedinIcon.classList.add('move-left');
        linkedinLogo.classList.add('move-right');
        linkedinIcon.classList.add('visible');
        linkedinLogo.classList.add('visible');
    } else {
        console.log('Icon is NOT in viewport'); // Debugging line
        linkedinIcon.classList.remove('move-left');
        linkedinLogo.classList.remove('move-right'); // Ensure you remove this class
        linkedinLogo.classList.remove('visible');
        linkedinIcon.classList.remove('visible');
    }
});



