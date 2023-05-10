function validarEmail() {
  var emailInput = document.getElementById("email");
  var mensagemEmailValido = document.querySelector(".emailvalido");
  var mensagemEnviado = document.querySelector(".enviado");
  var mensagemErro = document.querySelector(".erro");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    mensagemEmailValido.style.opacity = "0";
    mensagemEnviado.style.opacity = "1";
    mensagemErro.style.opacity = "0";
  } else {
    mensagemEmailValido.style.opacity = "1";
    mensagemErro.style.opacity = "1";
    mensagemEnviado.style.opacity = "0";
  }
}
