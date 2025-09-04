// === 1. Light/Dark Mode Toggle ===
// Select the theme toggle button and the body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// Add a click event listener to the button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Change the icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});


// === 2. Counter ===
// Select the buttons and the display value
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const counterValue = document.getElementById('counter-value');
let count = 0;

// Add event listeners for the counter buttons
addBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

subtractBtn.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
});


// === 3. Collapsible FAQ Section ===
// Select all the FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each item to add a click event listener
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked item
        item.classList.toggle('active');
    });
});


/*
 * Part 2: Form Validation with JavaScript
 */

// === Form Elements Selection ===
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('success-message');

// === Helper Function for Error Messages ===
const setError = (element, message) => {
    const errorDisplay = document.getElementById(`${element.id}-error`);
    errorDisplay.textContent = message;
    element.classList.add('error');
};

const clearError = (element) => {
    const errorDisplay = document.getElementById(`${element.id}-error`);
    errorDisplay.textContent = '';
    element.classList.remove('error');
};


// === Validation Logic ===
const validateForm = () => {
    let isValid = true;
    
    // Clear all previous error messages
    clearError(nameInput);
    clearError(emailInput);
    clearError(passwordInput);

    // 1. Name validation (check if empty)
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Name is required.');
        isValid = false;
    }

    // 2. Email validation (check if empty and valid format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        setError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // 3. Password validation (check if empty and length)
    if (passwordInput.value.trim() === '') {
        setError(passwordInput, 'Password is required.');
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        setError(passwordInput, 'Password must be at least 6 characters long.');
        isValid = false;
    }
    
    return isValid;
};


// === Form Submission Handler ===
contactForm.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    if (validateForm()) {
        // Form is valid, show a success message
        successMessage.textContent = 'Form submitted successfully!';
        
        // Optionally, clear the form after a short delay
        setTimeout(() => {
            contactForm.reset();
            successMessage.textContent = '';
        }, 3000);
    } else {
        // Form is invalid, show a generic error message
        successMessage.textContent = '';
    }
});
