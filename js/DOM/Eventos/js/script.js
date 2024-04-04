// const btn = document.querySelector("#my-button")

// btn.addEventListener("click", function (){
//     console.log("Clicou!")
// })

// const secondBtn = document.querySelector("#btn");

// function imprimirMensagem() {
//     console.log("Teste");
// }

// secondBtn.addEventListener("click", imprimirMensagem);

// const thirdBtn = document.querySelector("#other-btn");
// thirdBtn.addEventListener("click", () => {
//     console.log("Evento removido");
//     secondBtn.removeEventListener("click", imprimirMensagem);
// });

// const title = doc.querySelector("#my-title");
// title.addEventListener("click", (event) =>{
//     console.log(event)
//     console.log(e.offsetX);
// })

// const containerBtn = document.querySelector("#btn-container")
// const btnInsideContainer = document.querySelector("#div-btn");

// containerBtn.addEventListener("click", () =>{
//     console.log("Evento 1");
// });

// btnInsideContainer.addEventListener("click", (e) =>{
//     console.log("Evento 2");
//     e.stopPropagation();
// });

// const a = document.querySelector("a");
// a.addEventListener("click", (e) =>{
//     e.preventDefault();
//     console.log("Não alterou a página");
// })

// document.addEventListener("keyup", (e) => {
//     console.log(`Soltou a tecla ${e.key}`);
// });
// document.addEventListener("keydown", (e) => {
//     console.log(`Pressionou a tecla ${e.key}`);
// });

// const mouseEvents = document.querySelector("#mouse");
// mouseEvents.addEventListener("mousedown", () => {
//     console.log("Pressionou botão");
// });

// mouseEvents.addEventListener("mouseup", () => {
//     console.log("soltou botão");
// });

// mouseEvents.addEventListener("dblclick", () => {
//     console.log("click duplo");
// });

// window.addEventListener("scroll", (e) => {
//     if (window.scrollY > 200){
//         console.log("Passamos 200px!");
//     }
// });

const dataAtual = new Date();

console.log(dataAtual)

//Obter o dia do mês//
const dia = dataAtual.getDate();
console.log(`Dia: ${dia}`);

//Obter o mês (0-11, Janeiro =0)//
const mes = dataAtual.getMonth() + 1;

//Obter a data completaa formatada//
const dataFormatada = `${dia}/${mes}/${ano}`;
console.log(`Data formatada: ${dataFormatada}`);

const frutas = ["Maça", "Banana", "Laranja", "Pera", "Uva"];

//Encontrar a primeira fruta que começa com "L" usando `find()`
const frutaComL = frutas.find(fruta => fruta.startsWith("L"));
console.log(`Frutas com L: ${frutaComL}`);

//Percorrer  todas as frutas e imprimir seus nomes usando `forEach()`
frutas.forEach(fruta => console.log(`Nome da fruta: ${fruta}`));

//Mapear as frutas para seus tamanhos (em cm) usando `map()`
const tamanhosFrutas = frutas.map(fruta => fruta.length);
console.log(`tamanhos das frutas: ${tamanhosFrutas}`);

//Juntar os nomes das frutas em uma string usando `join()`
const listaFrutas = frutas.join(", ");
console.log(`Lista de frutas: ${listaFrutas}`);