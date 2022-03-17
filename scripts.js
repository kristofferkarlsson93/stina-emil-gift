const THE_PASSWORD = 'väl inslaget';

const hasSolvedPassword = window.localStorage.getItem('hasSolvedPassword') === 'true'
if (hasSolvedPassword) {
  document.getElementById('password-section').style.display = 'none'
  document.getElementById('gift-section').style.display = 'block'

  window.setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100);
}

const form = document.getElementById('password-form')
if (form) {
  document.getElementById('password-form').addEventListener('submit', (event) => {
    const password = document.getElementById("password-input").value;
    event.preventDefault();

    if (password.toLowerCase() === THE_PASSWORD.toLowerCase()) {
      window.localStorage.setItem('hasSolvedPassword', true);
      location.reload();
    } else {
      document.getElementById('error-box').style.visibility = 'visible'
      window.setTimeout(() => {
        document.getElementById('error-box').style.visibility = 'hidden'
      }, 3000)
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