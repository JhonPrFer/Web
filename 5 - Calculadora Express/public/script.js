let numero1 = document.getElementById('num1');
let numero2 = document.getElementById('num2');
let operacao = document.getElementById('operacoes');
function calcular(){
    if(numero1.value =='' || numero2.value =='')
        alert('numero(s) inválido(s)');
    else if(operacao.value == "dividir" && numero2.value == 0)
        alert('dividindo por 0')
    else if(operacao.value == "adicionar"){
        window.location.href=`http://localhost:3000/adicionar/${numero1.value}/${numero2.value}`
    }else if(operacao.value == "subtrair"){
        window.location.href=`http://localhost:3000/subtrair/${numero1.value}/${numero2.value}`
    }else if(operacao.value == "multiplicar"){
        window.location.href=`http://localhost:3000/multiplicar/${numero1.value}/${numero2.value}`
    }else if(operacao.value == "dividir"){
        window.location.href=`http://localhost:3000/dividir/${numero1.value}/${numero2.value}`
    }
}