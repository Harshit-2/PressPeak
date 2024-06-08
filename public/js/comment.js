const form = document.querySelector('.comment-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const comment = document.querySelector('#comment-message').value;

  fetch('/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, comment })
  })
 .then((response) => response.json())
 .then((data) => console.log(data))
 .catch((error) => console.error(error));
});