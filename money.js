const user = {
    balance: 0.00
}
const options = {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
};
const formatted = amount.toLocaleString('pt-BR', options);

const money = document.getElementById('saldo');
money.innerHTML = amount;

const like = (pid) => {
    const actualValue = document.getElementById('saldo')
    alert(typeof actualValue.innerHTML)
    actualValue.innerHTML = parseInt(actualValue.innerHTML) + 0.50.toLocaleString('pt-BR', options);
  const button = document.querySelector(`.pid_${pid}`);
  const svg = button.querySelector('svg');
  //<svg fill="#ed333b" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M372.87,33.391c-46.903,0-90.88,23.598-116.87,62.152c-25.99-38.555-69.967-62.152-116.87-62.152 C62.413,33.391,0,95.804,0,172.522c0,37.935,14.164,73.011,39.88,98.76l200.38,200.804c4.207,4.207,9.794,6.522,15.74,6.522 s11.532-2.315,15.74-6.521l200.314-200.772C497.815,245.522,512,210.435,512,172.522C512,95.804,449.587,33.391,372.87,33.391z"></path> </g> </g> </g></svg>
  svg.style.fill = 'red';
  svg.innerHTML = `<path d="M372.87,33.391c-46.903,0-90.88,23.598-116.87,62.152c-25.99-38.555-69.967-62.152-116.87-62.152 C62.413,33.391,0,95.804,0,172.522c0,37.935,14.164,73.011,39.88,98.76l200.38,200.804c4.207,4.207,9.794,6.522,15.74,6.522 s11.532-2.315,15.74-6.521l200.314-200.772C497.815,245.522,512,210.435,512,172.522C512,95.804,449.587,33.391,372.87,33.391z"></path>`;
};
