function clicou() {
  //alert("Obrigado por clicar")
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
  //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
  window.open("https://web.digitalinnovation.one");//abre em outra aba
  window.location.href = "https://web.digitalinnovation.one";//abre na mesma aba
}


function trocar(elemento) {
  //alert("Trocar texto")
  //document.getElementById("mousemove").innerHTML = "<b>Troquei o texto.. ha ha ha</b>";
  elemento.innerHTML = "<b>Troquei o texto.. ha ha ha</b>";
}

function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("página carregada")
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}

/*var nome = "Ismael Cavalcante";
var idade = 28;
alert(nome + " tem " + idade + " anos.")


var lista = ["maça", "pera", "laranja"];
lista.push("uva")
console.log(lista);
lista.pop()
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));

var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas[1].cor);
alert(frutas[1].nome)


var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
  alert("Você é maior de idade")
} else {
  alert("Você é menor de idade")
}



var count = 0;
while (count <= 5) {
  console.log(count);
  count++
};


var count = 0;
for (var i = 0; i <= 10; i++) {
  console.log(i);
}


var d = new Date();
alert(d.getDay())
alert(d.getMonth())
alert(d.getYear())



function soma(n1, n2) {
  return n1 + n2;
}
alert(soma(29, 67))

function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão !!!!!", "Japão", "Brasil"));



function validaIdade(idade) {
  var validar;
  if (idade >=18){
    validar = true
  } else {
    validar = false
  }
  return validar;
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));

*/
