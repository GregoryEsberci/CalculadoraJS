document.getElementById('acao').addEventListener('click', (primeiro) => {
    var max = document.getElementById('quantidade').value;

    var i = 1;
    var tela = '1';
    var primeiro = 1;
    var segundo = 1;
    var auxiliar = 0;

    while (max > i) {

        tela = tela + ', ' + primeiro;
        auxiliar = primeiro;
        primeiro = segundo + auxiliar;
        segundo = auxiliar;
        i++;
    }

    document.getElementById('tela').innerHTML = tela;
    return primeiro;

})
