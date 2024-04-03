//Exercicio 1//
//function minhaFuncao(){
    //console.log("Testando")
//}

//Exercicio 2 //
//minhaFuncao()

//Exercicio 3 - Variavel//
//const minhaFuncaoEmVariavel = function(txt){
    //console.log(`Imprimindo: ${txt}`)
//} 

//Exercicio 4 - Variaveis//
//minhaFuncaoEmVariavel("sapato")
//minhaFuncaoEmVariavel("colher")
//minhaFuncaoEmVariavel(5+5)

//Exercicio 5 - Função de Soma//
//const a = 10;
//const b = 20;
//const c = 30;
//const d = 40;

//function soma(n1 + n2){
  //  console.log(`A soma entre ${n1}} + ${n2} é = ${n1 + n2}`)
//}

//soma(a,b)
//soma(c,d)
//soma(d,a)

//Exercicio 6//
//function soma(catraca, b){
  //  console.log(`A soma entre ${catraca}} + ${b} é = ${catraca + b}`)
//}

//soma(a,b)
 //console.log(a)
 //console.log(catraca)

 //Exercicio 7//
 //function raizQuadrada (numero){
  // return numero * numero    
// }
//console.log(raizQuadrada(4))

//Exercicio 8 - Função anomia//
//const raizquadrada =  (numero) => {
    // return numero * numero    
//}
  //console.log(raizquadrada(4))

//exercio 9 - Função anonima//
//const testeArrow = () => {
    //console.log("Essa é uma arrow function")
//}
//testeArrow()

//Exercicio 10//
//const parOuimpar = (n) =>{
    //if(n % 2 === 0){
        //console.log(`${n} é par`)
    //}
    //console.log(`${n} é impar`)
//}
//parOuimpar(2)

//Exercicio 11 - Constante Lista//
//const lista = [1, 2, 3, 4, 5]

//console.log(lista)
//console.log(typeof lista)

//console.log(lista[1])
//console.log(lista[0])
//console.log(lista[6])
//console.log(lista.length)

//Exercicio 12 - Comprimento da Lista//
//for(let i  = 0; i < lista.length; i++){
    //console.log(`Elemento da lista: ${lista[i]}`)
//}

//const lista2 = ["Fusca", "Variant", "Chevete", "Golf", "Opala", "Brasilia"]
//for(let i = 0; i < lista2.length; i++){
    //console.log(`Elemento da Lista2: ${lista2[i]}`)
//}

//desafio //
// escrevam a array a partir das cores, azul, amarelo,
// verde, vermelho e branca.

//escreva uma estrutura de repetição com o elemento for, 
//para retornar todos os elementos do array.


//Questão 1 //
const lista = ["Azul", "Amarelo", "Verde", "Vermelha", "Branca"]
for(let i = 0; i < lista.length; i++){
    console.log(`Elemento da Lista: ${lista[i]}`)
}

//Questão 2 //
function color = [azul, amarelo, verde, vermelha, branca]
colors.forEach((c) => {
    console.log(`A cor atual é: ${c} `)
})
///////////////////////////////////////////////////

//const numbers = [5, 12, 4, 22];

//const otherNumbers = [1, 2, 3];

//const allNumbers = numbers.concat(otherNumbers);

//console.log(allNumbers);

//Letras maiusculas e minisculas//
//const text = "algum texto";
//const text2 = "Eita Jovem";
//console.log(text.toUpperCase());
//console.log(text2.toLocaleLowerCase());

//
//const array = ["a", "b", "c"];

//array.push("d");

//console.log(array);
//console.log(array.length);

//POP: pega o ultimo elemento do Array e remove//
//array.pop();
//const itemRemovido = array.pop();

//console.log(itemRemovido);
//console.log(array);
//console.log(array.length);

//array.push("Dá", "Para", "Inserir", "Vários");

//console.log(array);

//SHIFT: ele remove o primeiro elemento do Array
//const letters = ["a", "b", "c"];

//const letter = letters.shift();

//console.log(letter);
//console.log(letters);

//UNSHIFT: organiza os elementos //
//letter.unshift("z", "x", "y");

//letters.unshift("p");

//console.log(letters);
