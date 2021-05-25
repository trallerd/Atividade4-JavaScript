let nome = prompt("Digite seu nome:");
let peso = prompt("Qual seu peso ?");
let altura = prompt("Qual sua altura ?");

let nome1 = prompt("Digite seu nome:");
let peso1 = prompt("Qual seu peso ?");
let altura1 = prompt("Qual sua altura ?");

let imc = peso / (altura * altura);
let imc1 = peso1 / (altura1 * altura1);

if (imc > imc1) {
  console.log(`O IMC do ${nome}(${imc}) é maior que o de ${nome1}(${imc1})`);
} else {
  console.log(`O IMC do ${nome1}(${imc1}) é maior que o de ${nome}(${imc})`);
}

let nome2 = prompt("Digite seu nome:");
let peso2 = prompt("Qual seu peso2 ?");
let altura2 = prompt("Qual sua altura ?");

let imc2 = peso2 / (altura2 * altura2);

if (imc2 < 17) {
  console.log(`${nome2}(${imc2}) você esta muito abaixo do peso!`);
} else if (imc2 > 17 && imc2 < 18.49) {
  console.log(`${nome2}(${imc2}) você esta abaixo do peso!`);
} else if (imc2 > 18.5 && imc2 < 24.99) {
  console.log(`${nome2}(${imc2}) você esta no peso normal!`);
} else if (imc2 > 25 && imc2 < 29.99) {
  console.log(`${nome2}(${imc2}) você esta acima do peso!`);
} else if (imc2 > 30 && imc2 < 34.99) {
  console.log(`${nome2}(${imc2}) você esta em Obesidade I!`);
} else if (imc2 > 35 && imc2 < 39.99) {
  console.log(`${nome2}(${imc2}) você esta em Obesidade II(Severa)!`);
} else if (imc2 < 40) {
  console.log(`${nome2}(${imc2}) você esta em Obesidade III(Mórbida)!`);
}

let login = prompt("Login:");
let senha = prompt("Senha:");

if (
  (login == "aluno" && senha == 123) ||
  (login == "professor" && senha == 456)
) {
  console.log(`${login} logado com sucesso!`);
} else {
  console.log(`${login} invalido!`);
}

let n = prompt("Informe um numero:");
let palavras = new Array(parseInt(n - 1));
for (let i = 0; i <= parseInt(n - 1); i++) {
  palavras[i] = prompt(`Digite ${i + 1}° Palavra:`);
}

for (let a = parseInt(n - 1); a >= 0; a--) {
  console.log(`${palavras[a]}`);
}
function calcularidadeIdade(nomeIdade, idadeIdade) {
  if (idadeIdade >= 65) {
    console.log(`${nomeIdade} você ja esta aposentado!`);
  } else {
    console.log(
      `${nomeIdade} faltam ${65 - parseInt(idadeIdade)} para você se aposentar!`
    );
  }
}

let nomeIdade = prompt("Informe seu nome:");
let idadeIdade = prompt(`Qual a sua idade ${nomeIdade} ?`);
calcularidadeIdade(nomeIdade, idadeIdade);

function calculaGorjeta(valores) {
  let gorjetas = new Array(2);
  for (let i = 0; i <= valores.length; i++) {
    if (valores[i] < 50) {
      gorjetas[i] = parseInt(valores[i]) * (20 / 100);
    } else if (valores[i] > 50 && valores[i] < 200) {
      gorjetas[i] = parseInt(valores[i]) * (15 / 100);
    } else if (valores[i] > 200) {
      gorjetas[i] = parseInt(valores[i]) * (10 / 100);
    }
  }
  return gorjetas;
}
function exibirTotal(restaurantes, valores, gorjetas) {
  for (let a = 0; a <= 2; a++) {
    console.log(
      `Restaurante ${restaurantes[a]} [Valor: R$${valores[a]} | Gorjeta: R$${
        gorjetas[a]
      } | Total: R$${parseInt(gorjetas[a]) + parseInt(valores[a])}]`
    );
  }
}
let restaurantes = new Array(2);
let valores = new Array(2);

for (let i = 0; i <= 2; i++) {
  restaurantes[i] = prompt("Nome do restaurante:");
  valores[i] = prompt("Valor total da conta:");
}
gorjetas = calculaGorjeta(valores);
exibirTotal(restaurantes, valores, gorjetas);
