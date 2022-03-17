const THE_PASSWORD = 'väl inslaget';

const hasSolvedPassword = window.localStorage.getItem('hasSolvedPassword') === 'true'
if (hasSolvedPassword) {
  document.getElementById('password-section').style.display = 'none'
  document.getElementById('gift-section').style.display = 'block'
}

const form = document.getElementById('password-form')
if (form) {
  document.getElementById('password-form').addEventListener('submit', (event) => {
    const password = document.getElementById("password-input").value;
    event.preventDefault();

    if (password.toLowerCase() === THE_PASSWORD.toLowerCase()) {
      window.localStorage.setItem('hasSolvedPassword', true);
      location.reload();
    }
  });
}

const backButton = document.getElementById('back-button');
if (backButton) {
  backButton.addEventListener('click', () => {
    window.localStorage.setItem('hasSolvedPassword', false);
    location.reload();
  })
}