"use strict"


const calcular = document.getElementById("calcular");

function media(){
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado") 
    

    if(resultado.value = (numero1 + numero2) / 2 >= 5){
        resultado.value = ("Aluno aprovado")
        const formulario = document.getElementById("form")
        formulario.classList.add("verde")
        formulario.classList.remove("vermelho")
       
    }
    else{
        const formulario = document.getElementById("form")
        formulario.classList.add("vermelho")
        resultado.value = ("aluno reprovado")
        formulario.classList.remove("verde")
    }
    

}

calcular.addEventListener("click", media);

