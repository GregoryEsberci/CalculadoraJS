



function v1 (){
    var valor1 = +document.getElementById('valor1').value;
    var valor2 = +document.getElementById('valor2').value;
    var selecao2 = +document.getElementById('selecao2').value;
    var selecao1 = +document.getElementById('selecao1').value;

    var selecao = 0;

    selecao = selecao1 / selecao2;

    valor2 = valor1 * selecao;
    document.getElementById('valor2').value = valor2;

}

function v2() {

    var valor1 = +document.getElementById('valor1').value;
    var valor2 = +document.getElementById('valor2').value;
    var selecao2 = +document.getElementById('selecao2').value;
    var selecao1 = +document.getElementById('selecao1').value;

    var selecao = 0;

    selecao = selecao1 / selecao2;

    valor1 = valor2 * selecao;
    document.getElementById('valor1').value = valor1;

    alert('Input: ' + input);
    return 'v2';
}