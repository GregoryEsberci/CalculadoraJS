document.getElementById('calcular').addEventListener('click', function () {
    var n1 = +document.getElementById('n1').value;
    var n2 = +document.getElementById('n2').value;

    document.getElementById('resultado').innerHTML = null;
    var operacao = document.getElementById('operacao').value;

    if (operacao == 'soma') {
        document.getElementById('resultado').innerHTML = n1 + n2;
    }

    else if (operacao == 'subtrair') {
        document.getElementById('resultado').innerHTML = n1 - n2 ;
    }

    else if (operacao == 'multiplicar') {
        document.getElementById('resultado').innerHTML = n1 * n2;
    }

    else {
        document.getElementById('resultado').innerHTML = n1 / n2;
    }
});


