const user = JSON.parse(localStorage.getItem('user'))

const options = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
};

const money = document.getElementById('saldo');
money.innerHTML = user.balance.toLocaleString('pt-BR', options);

const username = document.querySelector('.username')
const email = document.querySelector('.email')
username.innerHTML = user.username
email.innerHTML = user.email

function msg(){
  alert(`Parabéns ${user.username}, seu saque via pix foi aprovado! Em até 24 horas estará disponível em sua conta!`)
}
  
