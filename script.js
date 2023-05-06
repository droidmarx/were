function validarEmail() {
  var emailInput = document.getElementById("email");
  var mensagemEmailValido = document.querySelector(".emailvalido");
  var mensagemEnviado = document.querySelector(".enviado");
  var mensagemErro = document.querySelector(".erro");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    mensagemEmailValido.style.display = "none";
    mensagemEnviado.style.display = "block";
    mensagemErro.style.display = "none";
  } else {
    mensagemEmailValido.style.display = "block";
    mensagemErro.style.display = "block";
    mensagemEnviado.style.display = "none";
  }
}
