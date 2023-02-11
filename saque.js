const hover = () => {
    this.classList.toggle('clicked');
}

const saque = () => {
    const btn = document.getElementById('sacado')
    //btn.style.display  = block
    btn.innerHTML = 'Parabéns Marcio Alves, seu saque via pix foi aprovado! Em até 24 horas estará disponível em sua conta!'
}

