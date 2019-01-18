document.getElementById('acao').addEventListener('click', () => {

    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var x1 = 0;
    var x2 = 0;

    var delta = Math.pow(b, 2) - 4 * a * c;

    x1 = (- b + Math.sqrt(delta)) / (2 * a);

    x2 = (- b - Math.sqrt(delta)) / (2 * a);

    document.getElementById('x2').innerHTML = x2;
    document.getElementById('x1').innerHTML = x1;
    document.getElementById('delta').innerHTML = delta;
})