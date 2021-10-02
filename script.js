

function somar() {
    
let numero1 = document.querySelector('#numero1')

let numero2 = document.querySelector('#numero2')
    
let valor1 = Number(numero1.value)
    
let valor2 = Number(numero2.value)
    
let soma = valor1 + valor2

let res = document.querySelector('#res')

res.innerText = ` o valor de ${valor1} + ${valor2} é ${soma}`

}


function subtrair() {
    
    let numero1 = document.querySelector('#numero1')
    
    let numero2 = document.querySelector('#numero2')
        
    let valor1 = Number(numero1.value)
        
    let valor2 = Number(numero2.value)
        
    let subtrair = valor1 - valor2
    
    let res = document.querySelector('#res')
    
    res.innerText = ` o valor de ${valor1} - ${valor2} é ${subtrair}`
    
    }

    
function dividir() {
    
    let numero1 = document.querySelector('#numero1')
    
    let numero2 = document.querySelector('#numero2')
        
    let valor1 = Number(numero1.value)
        
    let valor2 = Number(numero2.value)
        
    let dividir = valor1 / valor2
    
    let res = document.querySelector('#res')
    
    res.innerText = ` o valor de ${valor1} / ${valor2} é ${dividir}`
    
    }

    
function multiplicar() {
    
    let numero1 = document.querySelector('#numero1')
    
    let numero2 = document.querySelector('#numero2')
        
    let valor1 = Number(numero1.value)
        
    let valor2 = Number(numero2.value)
        
    let multiplicar = valor1 * valor2
    
    let res = document.querySelector('#res')
    
    res.innerText = ` o valor de ${valor1} X ${valor2} é ${multiplicar}`
    
    }

    function limpar(){

        let res = document.querySelector('#res')

        res.innerText = 'Resultado:'

    }


