//allows user to log into existing account
async function loginFormHandler(event) {
  event.preventDefault();
  console.log('clicked')

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //on sign in the users credentials are verifiedr
  //if successful the user will be directed to the dashboard
  if (email && password) {
    const response = await fetch('/api/users/login/', {
      method: 'post', 
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

//allows user to create a new account 
async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //collects the nessesary information for the user to create a new account
  if (username && email && password) {
    const response = await fetch('/api/users/', {
      method: 'post', 
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#login-btn').addEventListener('click', loginFormHandler);
document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);