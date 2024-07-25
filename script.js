// script.js - Additional interactivity
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation (basic)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission for demo purposes
        alert('Your message has been sent!');

        // Optionally, you can submit the form using fetch or XMLHttpRequest
        // fetch(form.action, {
        //     method: 'POST',
        //     body: new FormData(form)
        // }).then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.error(error));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Example: Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Custom code can be added here for more advanced interactivity
});
