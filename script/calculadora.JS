document.getElementById('calcular').addEventListener('click', function () {
    let input1 = +document.getElementById('input1').value.replace(',','.');
    let input2 = +document.getElementById('input2').value.replace(',','.');
    let resultado = 0;

    var operacao = document.getElementById('operacao').value;

    if (operacao == 'soma') {
        resultado = input1 + input2;
    }

    else if (operacao == 'subtrair') {
        resultado = input1 - input2;
    }

    else if (operacao == 'multiplicar') {
        resultado = input1 * input2;
    }

    else {
        resultado = input1 / input2;
    }

    if (resultado % 1 != 0) {
        resultado = resultado.toFixed(2).replace('.',',');
    }
    
    document.getElementById('resultado').innerHTML = resultado;
});


