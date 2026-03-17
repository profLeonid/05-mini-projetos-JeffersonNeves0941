'use strict'
function calcularValorEconomizado(preco,desconto){
    return Number(preco * desconto) /100
}

const calcularprecoFinal = (preco, valorEconomizado) => preco - valorEconomizado

function selecionarCor(desconto){
    if(desconto <= 5){
        return "desconto1"
    }else if(desconto <= 10){
        return "desconto2"
    }else{
        return "desconto3"
    }
}
function limparClasses () {
    document.getElementById("resultado")
    document.getElementById("desconto1", "desconto2", "desconto3")
}

function handleClick () {
    const preco = Number(document.getElementById("preco").value)
    const desconto = Number(document.getElementById("desconto").value)
    const resultado = document.getElementById("resultado")

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularValorEconomizado(preco, valorEconomizado)
    const cor = selecionarCor(desconto)
    limparClasses()

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.add(cor)
}
