
//Converte as moedas
function conversao(moedasRates) {
    let converterDe = document.getElementById('converterDe').value;
    let converterPara = document.getElementById('converterPara').value;
    let valorConverter = +document.getElementById('ValorConverter').value.replace(',','.');
    let valorResultado = 0;

    const valorDe = moedasRates[converterDe];
    let valorPara = moedasRates[converterPara];

    valorResultado = (valorPara * valorConverter) / valorDe;

    if (valorResultado % 1 != 0) {
        valorResultado = valorResultado.toFixed(2).replace('.', ',')
    }


    document.getElementById('valorResultado').value = valorResultado;
}


//Funcao chamada quando a promise der sucesso
function sucess(moedas) {
    document.getElementById('loading').innerHTML = '';
    let rates = moedas.data.rates;

    document.getElementById('run').addEventListener('click', () => {
        conversao(rates);
    });
}


// set endpoint and your access key
let endpoint = 'latest'
let access_key = '8cdc3da4f1e5760ecab03e23e85ae383';

let promise = axios.get('http://data.fixer.io/api/latest?access_key=8cdc3da4f1e5760ecab03e23e85ae383');

var teste = promise.then(
    (result) => {
        sucess(result);
    }

).catch((error) => {
    console.error(error);
});
