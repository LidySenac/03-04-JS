console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - SElecionando os elementos por Tag
const listItens = document.getAnimations.getElementsByTagName("li");
console.log(listItens);

// 3 - Selecionando os elementos por ID
const title = document.getElementById("title");
console.log(title);

// 4 - Selecionando os elementos por Class
const products = document.getElementsByClassName("product");
console.log(products);

// 5 - Selecionando os Elemento por CSS
const productsQuery = document.querySelectorAll("product");
console.log(products);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p")
const header = title.parentElement;
console.log(header)
header.insertBefore(p, title);
console.log(header);

// 7 - AppendChild
// adicionar elementos dentro de outro,
// sendo elemento add ultimo elemento do pai

const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// 8 - 