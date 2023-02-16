"use strict"

const add = document
                .getElementById("add");

// const adiconarCard = ()=> {
//     const container = document
//                         .getElementById("container")
//     container.innerHTML +=  '<div class="items"> </div>'
    
// }               

const adicionarCard = (nota, aluno) => {
    const container = document.getElementById("container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno} <br> </br> ${nota}</h2>`

    container.appendChild(novaDiv)
    
}

const adicionarRed = (nota,aluno) => {
    const container = document.getElementById("container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add('red')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}  <br> </br>${nota} </h2>`

    container.appendChild(novaDiv)
}

    const handleClick = () => {
        const aluno = prompt("digite seu nome")
        const nota = prompt("Digite sua nota")
        
        if( nota > 5){
            adicionarCard(nota,aluno)
        }
        else if(isNaN(nota)){
            console.log("verifique os campos")
        }
        else if(aluno == ""){
            console.log("verifique os campos")
        }
        else{
            adicionarRed(nota,aluno)
        }
        
        
    }
                

add.addEventListener("click",handleClick);

            