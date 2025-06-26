// script.js - With working contact form to niteshsde1@gmail.com using Formspree

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission using Formspree
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch('https://formspree.io/f/manjlvkr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      alert("✅ Message sent successfully! I' ll get back to you soon.");
      form.reset();
    } else {
      alert('❌ Something went wrong. Please try again later.');
    }
  });
}
