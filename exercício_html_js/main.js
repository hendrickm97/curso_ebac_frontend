const form = document.getElementById("form-submit");
const A = document.getElementById("number-a");
const B = document.getElementById("number-b");
const valorA = A;
const valorB = B;
let formEValido = false;

function numeroValido(valorA, valorB) {
  return valorB > valorA;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorInputA = parseFloat(A.value);
  const valorInputB = parseFloat(B.value);
  const mensagemSucesso = `Resultado Válido: o valor ${valorB.value} é maior que o valor ${valorA.value}.`;
  const mensagemErro = `Resultado Inválido: o valor ${valorB.value} não é maior que o valor ${valorA.value}.`;

  formEValido = numeroValido(valorInputA, valorInputB);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    valorA = "";
    valorB = "";
  } else {
    if (!formEValido) {
      const containerMensagemErro = document.querySelector(".error-message");
      containerMensagemErro.innerHTML = mensagemErro;
      containerMensagemErro.style.display = "block";
    }
  }
});
