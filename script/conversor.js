function converter() {
    let  selecao1 = document.getElementById('selecao1').value;
    let  selecao2 = document.getElementById('selecao2').value;
    let  valorConverter = document.getElementById('valorConverter').value.replace(',', '.');
    let  medidaConverter = 0;
    let  resultado = 0;

    medidaConverter = selecao1 / selecao2;

    resultado = medidaConverter * valorConverter;

    if (resultado % 1 != 0) {
        resultado = resultado.toFixed('6').replace('.', ',');
    }

    document.getElementById('resultado').innerHTML = resultado;
}