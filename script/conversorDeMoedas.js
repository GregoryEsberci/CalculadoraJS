
//Converte as moedas
function conversao(moedasRates) {
    let  converterDe = document.getElementById('converterDe').value;
    let  converterPara = document.getElementById('converterPara').value;
    let  valorConverter = +document.getElementById('ValorConverter').value.replace(',', '.');
    let  valorResultado = 0;

    const valorDe = moedasRates[converterDe];
    let  valorPara = moedasRates[converterPara];

    valorResultado = (valorPara * valorConverter) / valorDe;

    if (valorResultado % 1 != 0) {
        valorResultado = valorResultado.toFixed(2).replace('.', ',')
    }
    document.getElementById('valorResultado').innerHTML = valorResultado;
}


//Funcao chamada quando a promise der sucesso
function sucess(moedas) {

    document.getElementById('loading').innerHTML = '';
    let  rates = moedas.data.rates;

    //Exibe a data
    let  date = new Date(moedas.data.timestamp * 1000).toLocaleString();
    document.getElementById('dataAtualizacao').innerHTML = date;


    //Roda a funcao de conversao
    document.getElementById('run').addEventListener('click', () => {
        conversao(rates);
    });
}


// set endpoint and your access key
let  endpoint = 'latest'
let  access_key = '8cdc3da4f1e5760ecab03e23e85ae383';

let  promise = axios.get('http://data.fixer.io/api/latest?access_key=8cdc3da4f1e5760ecab03e23e85ae383');

let teste = promise.then(
    (result) => {
        sucess(result);
    }

).catch((error) => {
    console.error(error);
});



let  siglasMoedas = [
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BTC',
    'BTN',
    'BWP',
    'BYN',
    'BYR',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GGP',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'IMP',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JEP',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LTL',
    'LVL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'STD',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XCD',
    'XDR',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMK',
    'ZMW',
];


let  converterPara = document.getElementById('converterPara');
let  converterDe = document.getElementById('converterDe');

siglasMoedas.forEach((siglas) => {
    let optionPara = document.createElement('option');
    optionPara.text = siglas;
    optionPara.value = siglas;
    converterPara.add(optionPara);

    let optionDe = document.createElement('option');
    optionDe.text = siglas;
    optionDe.value = siglas;
    converterDe.add(optionDe);
});