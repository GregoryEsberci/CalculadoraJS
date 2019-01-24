
//Saida de dados
function output(area, perimetro, profundidade) {

    let volume = profundidade * area;

    document.getElementById('area').innerHTML = `Área: ${area}`;
    document.getElementById('perimetro').innerHTML = `Perimetro: ${perimetro}`;
    document.getElementById('volume').innerHTML = `Volume: ${volume}`;
}

//quadrado
function quadrado() {

    let lado = +document.getElementById('ladoQuadrado').value;
    let profundidade = +document.getElementById('profundidadeQuadrado').value;
    let area = 0;
    let perimetro = 0;

    area = Math.pow(lado, 2);
    perimetro = 4 * lado;


    output(area, perimetro, profundidade);
    document.getElementById('figura').innerHTML = 'Quadrado';
}


//retangulo
function retangulo() {
    let lado = +document.getElementById('LadoRetanguno').value;
    let base = +document.getElementById('BaseRetanguno').value;
    let profundidade = +document.getElementById('ProfundidadeRetanguno').value;
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
    let base = +document.getElementById('AlturaEquilatero').value;
    let altura = +document.getElementById('BaseEquilatero').value;
    let profundidade = +document.getElementById('ProfundidadeEquilatero').value;
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
    let base = +document.getElementById('AlturaIsosceles').value;
    let altura = +document.getElementById('BaseIsosceles').value;
    let profundidade = +document.getElementById('ProfundidadeIsosceles').value;
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
    let base = +document.getElementById('BaseTrianguloRetangulo').value;
    let altura = +document.getElementById('AlturaTrianguloRetangulo').value;
    let profundidade = +document.getElementById('ProfundidadeTrianguloRetangulo').value;
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
    let raio = +document.getElementById('RaioCirculo').value;
    let perimetro = 0;
    let area = 0;

    area = Math.PI * Math.pow(raio, 2);
    perimetro = 2 * Math.PI * raio;

    document.getElementById('figura').innerHTML = 'Circulo';

    document.getElementById('area').innerHTML = `Área: ${area}`;
    document.getElementById('perimetro').innerHTML = `Perimetro: ${perimetro}`;
    document.getElementById('volume').innerHTML = '';
}
