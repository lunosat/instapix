const user = JSON.parse(localStorage.getItem('user'))
const options = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
};

const money = document.getElementById('saldo');
money.innerHTML = user.balance.toLocaleString('pt-BR', options);

const username = document.querySelector('.username');
const email = document.querySelector('.email');
username.innerHTML = user.username;
email.innerHTML = user.email;

function apenasNumeros(valor) {
  let numeros = valor.replace(/\D/g, ""); 
  numeros = numeros.trim(); 
  numeros = numeros.replace(/\D/g, ""); 
  return numeros === "" ? NaN : parseFloat(numeros);
}

async function saque() {
  const balanceInput = document.querySelector('.balance-input');
  const balanceCheckout = apenasNumeros(balanceInput.value);
  if(isNaN(balanceCheckout)){
    alert('Valor inválido! Utilize apenas números.')
    return
  }
  if(balanceCheckout > user.balance) {
    alert('Você não pode sacar mais do que tem.')
    return
  }
  if(user.balance < 1500){
    alert('É necessário o saldo mínimo de 1.500,00 para realizar o saque.')
    return
  }
  alert(
    `Parabéns ${user.username}, seu saque via pix foi aprovado! Em até 24 horas estará disponível em sua conta!`
  );
  user.balance -= balanceCheckout;
  money.innerHTML = user.balance.toLocaleString('pt-BR', options);
  await updateUser()
}

const updateUser = async () => {
  const response = await fetch(`${config.api}/users/${user.username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      balance: user.balance,
    }),
  });

  localStorage.setItem('user', JSON.stringify(user));
  return response;
};
