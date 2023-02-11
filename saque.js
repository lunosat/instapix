const hover = () => {
    this.classList.toggle('clicked');
}

const saque = () => {
    const btn = document.getElementById('sacado')
    //btn.style.display  = block
    btn.innerHTML = 'Parabéns Marcio Alves, seu saque via pix foi aprovado! Em até 24 horas estará disponível em sua conta!'
}

function customAlert(message) {
    // Criar uma div para exibir a mensagem
    var alertDiv = document.createElement("div");
    alertDiv.innerHTML = message;
    alertDiv.style.backgroundColor = "#f2dede";
    alertDiv.style.border = "1px solid #ebccd1";
    alertDiv.style.padding = "15px";
    alertDiv.style.margin = "15px 0";
    alertDiv.style.position = "fixed";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translateX(-50%)";
    alertDiv.style.top = "0";
    alertDiv.style.width = "50%";
    alertDiv.style.zIndex = "9999";
  
    // Adicionar a div ao corpo da página
    document.body.appendChild(alertDiv);
  
    // Remover a div após 3 segundos
    setTimeout(function () {
      document.body.removeChild(alertDiv);
    }, 3000);
  }
  
  // Usando a função customAlert
  customAlert("Esta é uma mensagem de alerta personalizada!");
  
