
//Saida de dados
function output(area, perimetro, profundidade) {

    let volume = profundidade * area;

    if (volume % 1 != 0) {
        volume = volume.toFixed(2).replace('.', ',')
    }

    if (area % 1 != 0) {
        area = area.toFixed(2).replace('.', ',')
    }

    if (perimetro % 1 != 0) {
        perimetro = perimetro.toFixed(2).replace('.', ',')
    }

    document.getElementById('area').innerHTML = `Área: ${area}`;
    document.getElementById('perimetro').innerHTML = `Perimetro: ${perimetro}`;
    document.getElementById('volume').innerHTML = `Volume: ${volume}`;
}

//quadrado
function quadrado() {

    let lado = +document.getElementById('ladoQuadrado').value.replace(',', '.');
    let profundidade = +document.getElementById('profundidadeQuadrado').value.replace(',', '.');
    let area = 0;
    let perimetro = 0;

    area = Math.pow(lado, 2);
    perimetro = 4 * lado;


    output(area, perimetro, profundidade);
    document.getElementById('figura').innerHTML = 'Quadrado';
}


//retangulo
function retangulo() {
    let lado = +document.getElementById('LadoRetanguno').value.replace(',', '.');
    let base = +document.getElementById('BaseRetanguno').value.replace(',', '.');
    let profundidade = +document.getElementById('ProfundidadeRetanguno').value.replace(',', '.');
    let perimetro = 0;
    let area = 0;

    area = lado * base;
    perimetro = base * 2 + lado * 2;
    volume = area * profundidade;

    output(area, perimetro, profundidade);
    document.getElementById('figura').innerHTML = 'Retângulo';
}

//equilatero
function equilatero() {
    let altura = +document.getElementById('AlturaEquilatero').value.replace(',', '.');
    let profundidade = +document.getElementById('ProfundidadeEquilatero').value.replace(',', '.');
    let area = 0;
    let perimetro = 0;

    area = Math.pow(altura, 2) / Math.sqrt(3);
    perimetro = 3 * ((altura * 2) / Math.sqrt(3));
    volume = area * profundidade;

    output(area, perimetro, profundidade);
    document.getElementById('figura').innerHTML = 'Triângulo equilátero';
}

//isosceles
function isosceles() {
    let base = +document.getElementById('AlturaIsosceles').value.replace(',', '.');
    let altura = +document.getElementById('BaseIsosceles').value.replace(',', '.');
    let profundidade = +document.getElementById('ProfundidadeIsosceles').value.replace(',', '.');
    let area = 0;
    let perimetro = 0;


    area = (altura * base) / 2;
    perimetro = 2 * Math.sqrt(altura + Math.pow((base / 2), 2) + base);
    volume = area * profundidade;

    output(area, perimetro, profundidade);
    document.getElementById('figura').innerHTML = 'Triângulo isósceles';
}



//Triangulo retangulo
function TrianguloRetangulo() {
    let base = +document.getElementById('BaseTrianguloRetangulo').value.replace(',', '.');
    let altura = +document.getElementById('AlturaTrianguloRetangulo').value.replace(',', '.');
    let profundidade = +document.getElementById('ProfundidadeTrianguloRetangulo').value.replace(',', '.');
    let area = 0;
    let perimetro = 0;

    area = (altura * base) / 2;
    perimetro = altura + base + (Math.sqrt(Math.pow(altura, 2) + Math.pow(base, 2)));
    volume = area * profundidade;

    output(area, perimetro, profundidade);
    document.getElementById('figura').innerHTML = 'Triângulo retângulo';
}

//circulo
function circulo() {
    let raio = +document.getElementById('RaioCirculo').value.replace(',', '.');
    let perimetro = 0;
    let area = 0;

    area = Math.PI * Math.pow(raio, 2);
    perimetro = 2 * Math.PI * raio;

    document.getElementById('figura').innerHTML = 'Circulo';


    if (area % 1 !== 0) {
        area = area.toFixed(3).replace('.', ',');

    }

    if (perimetro % 1 !== 0) {
        perimetro = perimetro.toFixed(3).replace('.', ',');
    }

    document.getElementById('area').innerHTML = `Área: ${area}`;
    document.getElementById('perimetro').innerHTML = `Perimetro: ${perimetro}`;
    document.getElementById('volume').innerHTML = '';
}