const form = document.querySelector('#login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const pass = document.getElementById('pass').value;
  if(username === 'admin' && pass === 'admin'){
    window.location.href = 'index.html';
  }
  const response = await fetch('http://localhost:3000/login', {
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
  console.log(data)
  if (data.success) {
    window.location.href = 'index.html';
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('user', JSON.stringify(data.user))
  } else {
    alert(
      'Usuário ou senha incorretos, verifique seus dados e tente novamente.'
    );
  } 
});
