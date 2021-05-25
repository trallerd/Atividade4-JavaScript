function atvd1() {
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
}
function atvd2() {
  let nome = prompt("Digite seu nome:");
  let peso = prompt("Qual seu peso ?");
  let altura = prompt("Qual sua altura ?");

  let imc = peso / (altura * altura);

  if (imc < 17) {
    console.log(`${nome}(${imc}) você esta muito abaixo do peso!`);
  } else if (imc > 17 && imc < 18.49) {
    console.log(`${nome}(${imc}) você esta abaixo do peso!`);
  } else if (imc > 18.5 && imc < 24.99) {
    console.log(`${nome}(${imc}) você esta no peso normal!`);
  } else if (imc > 25 && imc < 29.99) {
    console.log(`${nome}(${imc}) você esta acima do peso!`);
  } else if (imc > 30 && imc < 34.99) {
    console.log(`${nome}(${imc}) você esta em Obesidade I!`);
  } else if (imc > 35 && imc < 39.99) {
    console.log(`${nome}(${imc}) você esta em Obesidade II(Severa)!`);
  } else if (imc < 40) {
    console.log(`${nome}(${imc}) você esta em Obesidade III(Mórbida)!`);
  }
}
function atvd3() {
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
}
function atvd4() {
  let n = prompt("Informe um numero:");
  let palavras = new Array(parseInt(n - 1));
  for (let i = 0; i <= parseInt(n - 1); i++) {
    palavras[i] = prompt(`Digite ${i + 1}° Palavra:`);
  }

  for (let a = parseInt(n - 1); a >= 0; a--) {
    console.log(`${palavras[a]}`);
  }
}
function calcularIdade(nome, idade) {
  if (idade >= 65) {
    console.log(`${nome} você ja esta aposentado!`);
  } else {
    console.log(
      `${nome} faltam ${65 - parseInt(idade)} para você se aposentar!`
    );
  }
}
function atvd5() {
  
  let nome = prompt("Informe seu nome:");
  let idade = prompt(`Qual a sua idade ${nome} ?`);
  calcularIdade(nome, idade);
}
function calculaGorjeta(valores){
  let gorjetas = new Array(2)
  for(let i=0; i<= valores.length; i++){
    if(valores[i]<50){
      gorjetas[i] = parseInt(valores[i]) * (20/100)
    }else if(valores[i]>50&&valores[i]<200){
      gorjetas[i] = parseInt(valores[i]) * (15/100) 
    }else if(valores[i]>200){
      gorjetas[i] = parseInt(valores[i]) * (10/100)
    }
  }
  return gorjetas
}
function exibirTotal(restaurantes,valores,gorjetas){

  for(let a=0; a<= 2; a++){
    console.log(`Restaurante ${restaurantes[a]} [Valor: R$${valores[a]} | Gorjeta: R$${gorjetas[a]} | Total: R$${parseInt(gorjetas[a])+parseInt(valores[a])}]`)
  }

}
function atvd6(){
  let restaurantes = new Array(2)
  let valores = new Array(2)

  for(let i=0; i<=2; i++){
    restaurantes[i] = prompt("Nome do restaurante:")
    valores[i] = prompt("Valor total da conta:")
  }
  gorjetas = calculaGorjeta(valores)
  exibirTotal(restaurantes,valores,gorjetas)
}
