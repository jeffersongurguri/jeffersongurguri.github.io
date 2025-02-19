function calcularIMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  // Validação dos dados de entrada
  // if (peso === "" || altura === "" || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  //     alert("Por favor, insira valores numéricos válidos para peso e altura.");
  //     return;
  // }

  let imc = peso / (altura * altura);
  let resultado = document.getElementById("resultado");

  // Classificação do IMC (adaptado da tabela da OMS)
  let classificacao = "";
  if (imc < 18.5) {
      classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
      classificacao = "Peso normal";
  } else if (imc > 29.9) {
      classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
      classificacao = "Obesidade grau I";
  } else if (imc < 39.9) {
      classificacao = "Obesidade grau II";
  } else {
      classificacao = "Obesidade grau III";
  }

  resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + " (" + classificacao + ")";
}