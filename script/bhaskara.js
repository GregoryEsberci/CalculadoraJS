document.getElementById('acao').addEventListener('click', () => {

    let a = +document.getElementById('a').value.replace(',', '.');
    let b = +document.getElementById('b').value.replace(',', '.');
    let c = +document.getElementById('c').value.replace(',', '.');
    let x1 = 0;
    let x2 = 0;

    let delta = Math.pow(b, 2) - 4 * a * c;


    if (delta >= 0) {
        x1 = (- b + Math.sqrt(delta)) / (2 * a);
        x2 = (- b - Math.sqrt(delta)) / (2 * a);

        if (x1 % 1 != 0) {
            x1 = x1.toFixed(2).replace('.', ',');
        }

        if (x2 % 1 != 0) {
            x2 = x2.toFixed(2).replace('.', ',');
        }

    }
    

    else {
        x1 = 'A equação não tem soluções reais';
        x2 = 'A equação não tem soluções reais';
    }


    if (delta % 1 != 0) {
        delta = delta.toFixed(2).replace('.', ',');
    }

    document.getElementById('x2').innerHTML = x2;
    document.getElementById('x1').innerHTML = x1;
    document.getElementById('delta').innerHTML = delta;
})