//getElementByTagName = Seleciona todas as tags que eu desejar
let paragrafos = document.getElementsByTagName("p")
paragrafos.innerHTML = "Palmeiras não tem mundial"

let input = document.getElementsByTagName("input")[0].value

//getElementeById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Alterando usando Js"

//getElementByClassName - Seleciona todas os elementos do tipo class
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "red"
caixas[1].style.backgroundColor = "green"

//querySelector - Seleciona um elemento do tipo Class ou ID
const paragrafoQuery = document.querySelector("#paragrafoQuery")
paragrafoQuery.style.backgroundColor = "yellow"
paragrafoQuery.style.padding = "10px"

function alteraTexto() {
    let input = document.getElementsByTagName("input")[0].value
    titulo.textContent = input
}

function alteraQuery() {
    let input = document.getElementsByTagName("input")[1].value
    paragrafoQuery.textContent = input
}





                            