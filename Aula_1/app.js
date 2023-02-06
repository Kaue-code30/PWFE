"use strict"


const calcular = document.getElementById("calcular");

function somar(){
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    console.log(numero1 + numero2);
    let resultado = document.getElementById("resultado") 
    resultado.value = numero1 +numero2


    const formulario = document.getElementById("form")
    formulario.classList.add("vermelho")

}

calcular.addEventListener("click", somar);

