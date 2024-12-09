function calcularIMC(){
    // Obter os valores de peso e altura
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)

    console.log(peso);
    console.log(altura);
    
    if(isNaN(peso) || isNaN(altura) || peso <=0 || altura <=0){
        alert('Por favor, insira válidos para peso e altura!!!')
        return 
    }

    // Calculo do IMC
    let imc = peso / (altura * altura)
    
    let classificacao = ''
    if(imc < 18.5){
        classificacao = 'Abaixo do peso'
    } else if(imc < 25){
        classificacao = 'Peso Normal'
    } else if(imc < 30){
        classificacao = 'Sobrepeso'
    } else if(imc < 35){
        classificacao = 'Obesidade grau I'
    } else if(imc < 40){
        classificacao = 'Obesidade grau II'
    } else {
        classificacao = 'Obesidade grau III'
    }

    // Exibir resultado

    document.getElementById('resultado').textContent = `Seu IMC é: ${imc.toFixed(2)}. Classificação: ${classificacao}`
}

calcularIMC();