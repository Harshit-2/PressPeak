// comment.js

const commentForm = document.querySelector('.comment-form');
const commentMessageField = document.querySelector('#comment-message');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = commentMessageField.value.trim();

  if (name && email && message) {
    fetch('/post-format-standard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Clear the form fields
      nameField.value = '';
      emailField.value = '';
      commentMessageField.value = '';
    })
    .catch((error) => {
      console.error(error);
    });
  } else {
    alert('Please fill in all fields');
  }
});