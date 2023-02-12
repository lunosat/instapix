const user = JSON.parse(localStorage.getItem('user'))

const options = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
};
const money = document.getElementById('saldo');
money.innerHTML = user.balance.toLocaleString('pt-BR', options);


const like = async (pid) => {
  console.log(pid)
  user.balance = parseFloat(user.balance) + 1.00;

  money.innerHTML = user.balance.toLocaleString('pt-BR', options);
  const button = document.querySelector(`.pid_${pid}`);
  const svg = button.querySelector('svg');
  svg.style.fill = 'red';
  svg.innerHTML = `<path d="M372.87,33.391c-46.903,0-90.88,23.598-116.87,62.152c-25.99-38.555-69.967-62.152-116.87-62.152 C62.413,33.391,0,95.804,0,172.522c0,37.935,14.164,73.011,39.88,98.76l200.38,200.804c4.207,4.207,9.794,6.522,15.74,6.522 s11.532-2.315,15.74-6.521l200.314-200.772C497.815,245.522,512,210.435,512,172.522C512,95.804,449.587,33.391,372.87,33.391z"></path>`;

  await updateBalance()
};

const updateBalance = async () => {
  const response = await fetch(`${config.api}/users/${user.username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      balance: user.balance
    }),
  });

  localStorage.setItem('user', JSON.stringify(user))
  return response
}