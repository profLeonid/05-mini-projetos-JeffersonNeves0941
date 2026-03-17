'use strict'
function calcularMedia(){
let n1 = Number(document.getElementById("n1").value)
let n2 = Number(document.getElementById("n2").value)
let n3 = Number(document.getElementById("n3").value)
const resultado = document.getElementById("resultado")
let status
const media = (n1 + n2 + n3 ) / 3

    if(media >= 7) {
        resultado.classList.add("aprovado")
        status = "aprovado"
    }else if (media > 5 && media < 6.9){
        resultado.classList.add("recuperacao")
        status = "recuperacao"
    }else{
      resultado.classList.add("reprovado")
      status = "reprovado" 
    }

    resultado.textContent =`Com a media de ${media.toFixed(2)} você esta ${status}`

}


