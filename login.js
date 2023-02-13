const form = document.querySelector('#login-form');
const loginMessage = document.querySelector(".login-message");

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const pass = document.getElementById('pass').value;
  loginMessage.innerHTML = "Realizando login...";
  if(username === 'admin' && pass === 'admin'){
    window.location.href = 'index.html';
  }
  const response = await fetch(`${config.api}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: pass,
    }),
  });

  const data = await response.json();
  if (data.success) {
    window.location.href = 'index.html';
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('user', JSON.stringify(data.user))
  } else {
    loginMessage.style.color = 'red'
    loginMessage.innerHTML = "Verifique seus dados e tente novamente."
    alert(
      'Usuário ou senha incorretos, verifique seus dados e tente novamente.'
    );
  } 
});
