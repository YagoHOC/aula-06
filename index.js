// this is a js file
// Gabriel Barros

//B 1.
let idade = Number(prompt('Qual é a sua idade?'))
let idadeAmigo = Number(prompt('Qual a idade do seu melhor amigo/a ?'))
console.log('Sua idade é maior que a do seu amigo?', idade>idadeAmigo)
console.log('Sua diferença de idade é',idade-idadeAmigo)


//B 2.
let numero = Number(prompt("Insira um número par"))
console.log(numero % 2)
//o resto sempre é 0
//se  digitar um número ímpar, o resto será 1


//B 3.

let idadeAnos = Number(prompt("Qual a sua idade em anos?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 30
let idadeHoras = idadeDias * 24
console.log(idadeMeses, idadeDias, idadeHoras)

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)

//B 4.
let numeroUm = Number(prompt('Digite um número'))
let numeroDois = Number(prompt('Digite outro número'))

console.log('O primeiro número é maior que o segundo?', numeroUm>numeroDois)
console.log('O primeiro número é igual ao segundo?', numeroUm==numeroDois)
console.log('O primeiro número é divisível pelo segundo?', !Boolean(numeroUm%numeroDois))
console.log('O segundo número é divisível pelo segundo?', !Boolean(numeroDois%numeroUm))
