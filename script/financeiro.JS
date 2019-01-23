/* // set endpoint and your access key
let endpoint = 'latest'
let access_key = '8cdc3da4f1e5760ecab03e23e85ae383';

let promise = axios.get('http://data.fixer.io/api/latest?access_key=8cdc3da4f1e5760ecab03e23e85ae383');

var teste = promise.then(
    (result) => {

        document.getElementById('run').addEventListener('click', () => {
            let converterDe = document.getElementById('converterDe').value;
            let converterPara = document.getElementById('converterPara').value;
            let valorConverter = document.getElementById('ValorConverter').value;
            let valorResultado = 0;

            let rates = result.data.rates;
            const valorDe = rates[converterDe];
            let valorPara = rates[converterPara];
            let base = rates.EUR;

            ValorResultado = (valorDe * valorConverter) / valorPara;

            document.getElementById('ValorResultado').innerHTML = valorResultado;





        })


        console.log(result)
        document.getElementById('loading').innerHTML = '';
    }

).catch((error) => {
    console.error(error);
});












document.getElementById('run').addEventListener('click', () => {
    let converterDe = document.getElementById('converterDe').value;
    let converterPara = document.getElementById('converterPara').value;
    let valorConverter = document.getElementById('ValorConverter').value;
    let valorResultado = 0;

    let rates = result.data.rates;
    const valorDe = rates[converterDe];
    let valorPara = rates[converterPara];
    let base = rates.EUR;

    ValorResultado = (valorDe * valorConverter) / valorPara;

    document.getElementById('ValorResultado').innerHTML = valorResultado;


})

*/

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);