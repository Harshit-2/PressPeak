const form = document.getElementById('contact-form');
const popupMessage = document.getElementById('popup-message');
const popupText = document.getElementById('popup-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch('/contact', {
    method: 'POST',
    body: formData
  })
 .then((response) => {
    if (response.ok) {
      form.reset();
      popupText.textContent = 'Form submitted successfully!';
      popupMessage.classList.add('show');
    } else {
      popupText.textContent = 'Error submitting form. Please try again.';
      popupMessage.classList.add('show');
    }
  })
 .catch((error) => {
    console.error(error);
    popupText.textContent = 'Error submitting form. Please try again.';
    popupMessage.classList.add('show');
  });
});

// Add event listener to close popup message when user clicks outside
document.addEventListener('click', (e) => {
  if (e.target!== popupMessage &&!popupMessage.contains(e.target)) {
    popupMessage.classList.remove('show');
  }
});