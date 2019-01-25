document.getElementById('acao').addEventListener('click', (primeiro) => {
    
    var max = document.getElementById('quantidade').value.replace(',', '.');
    primeiro = 1;
    let i = 1;
    let tela = '<li>1</li>';
    let segundo = 1;
    let auxiliar = 0;

    while (max > i) {   
        tela = `${tela} <li>${primeiro}</li>`;
        auxiliar = primeiro;
        primeiro = segundo + auxiliar;
        segundo = auxiliar;
        i++;
    }

    document.getElementById('tela').innerHTML = tela;
    return primeiro;

})