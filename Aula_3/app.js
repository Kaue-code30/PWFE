var readline = require("readline")

var entradaDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

var soma = "1";
var subtracao = "2";
var divisao = "3";
var multiplicacao = "4";
var operacaoEscolhida;

entradaDados.question("Escolha o número que representa uma das quatro operações matemáticas: \n 1: Soma \n 2: Subtração \n 3: Divisão \n 4: Multiplicação \n" ,function(operacao){
    var operacaoEscolhida = operacao
    
entradaDados.question("Digite um número: \n", function(numeroUm){
    let primeiroNumeroDigitado = Number(numeroUm);
    
entradaDados.question("Digite outro número: \n", function(numeroDois){
    let segundoNumeroDigitado = Number(numeroDois);

    if (isNaN(primeiroNumeroDigitado) || isNaN(segundoNumeroDigitado)){
        console.log("É nescessario que você complete todos os campos e que digte números e não letras")
   }
    
                else if(operacaoEscolhida == soma){
                        console.log(primeiroNumeroDigitado + segundoNumeroDigitado)
                                       
                     }else if(operacaoEscolhida == subtracao ){

                           console.log(primeiroNumeroDigitado - segundoNumeroDigitado)
                     }else if(operacaoEscolhida == multiplicacao){

                          console.log(primeiroNumeroDigitado * segundoNumeroDigitado)
                        }else if (operacaoEscolhida == divisao){

                          console.log(primeiroNumeroDigitado / segundoNumeroDigitado)
                     }else if(primeiroNumeroDigitado == String){

                         console.log("tessste")
                     }
                 
                
                else{
                    console.log("testeatat")
                }
            })
    
        })
 })


    
