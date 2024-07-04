// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slide.length;
        slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // Event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Get values from the form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Check if all fields are filled
        if (name && email && phone && message) {
            // Display an alert with the entered values
            alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
        } else {
            // Display an alert if any field is empty
            alert('Please fill in all fields.');
        }

        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('contact-form');
            const displayName = document.getElementById('display-name');
        
            form.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent form from submitting
                const nameInput = document.getElementById('name').value;
                displayName.textContent = nameInput;
    });

    // Set the username in the welcome message
    const username = 'Your Name';
    document.getElementById('username').textContent = username;
});
