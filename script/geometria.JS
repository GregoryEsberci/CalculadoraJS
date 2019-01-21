
//quadrado
function quadrado() {

    let lado = +document.getElementById('ladoQuadrado').value;
    let profundidade = +document.getElementById('profundidadeQuadrado').value;
    let Área = 0;
    let perimetro = 0;
    let volume = 0;

    area = Math.pow(lado, 2);
    document.getElementById('resultado1').innerHTML = `Área: ${area}`;

    perimetro = 4 * lado;
    document.getElementById('resultado2').innerHTML = `Perimetro: ${perimetro}`;

    volume = profundidade * area;
    document.getElementById('resultado3').innerHTML = `volume: ${volume}`;

    document.getElementById('figura').innerHTML = 'Quadrado';
}


//retangulo
function retangulo() {
    let lado = +document.getElementById('LadoRetanguno').value;
    let base = +document.getElementById('BaseRetanguno').value;
    let profundidade = +document.getElementById('ProfundidadeRetanguno').value;
    let perimetro = 0;
    let area = 0;
    let volume = 0;

    area = lado * base;
    document.getElementById('resultado1').innerHTML = `Área: ${area}`;

    perimetro = base * 2 + lado * 2;
    document.getElementById('resultado2').innerHTML = `Perimetro: ${perimetro}`;

    volume = area * profundidade;
    document.getElementById('resultado3').innerHTML = `Volume: ${volume}`;

    document.getElementById('figura').innerHTML = 'Retângulo';
}

//equilatero
function equilatero() {
    let base = +document.getElementById('AlturaEquilatero').value;
    let altura = +document.getElementById('BaseEquilatero').value;
    let profundidade = +document.getElementById('ProfundidadeEquilatero').value;
    let area = 0;
    let volume = 0;
    let perimetro = 0;

    area = Math.pow(altura, 2) / Math.sqrt(3);
    document.getElementById('resultado1').innerHTML = `Área: ${area}`

    perimetro = 3 * ((altura * 2) / Math.sqrt(3));
    document.getElementById('resultado2').innerHTML = `Perimetro: ${perimetro}`

    volume = area * profundidade;
    document.getElementById('resultado3').innerHTML = `Volume: ${volume}`

    document.getElementById('figura').innerHTML = 'Triângulo equilátero';
}

//isosceles
function isosceles() {
    let base = +document.getElementById('AlturaIsosceles').value;
    let altura = +document.getElementById('BaseIsosceles').value;
    let profundidade = +document.getElementById('ProfundidadeIsosceles').value;
    let area = 0;
    let volume = 0;
    let perimetro = 0;


    area = (altura * base) / 2;
    document.getElementById('resultado1').innerHTML = `Área: ${area}`

    perimetro = 2 * Math.sqrt(altura + Math.pow((base / 2), 2) + base);
    document.getElementById('resultado2').innerHTML = `Perimetro: ${perimetro}`

    volume = area * profundidade;
    document.getElementById('resultado3').innerHTML = `Volume: ${volume}`;
    document.getElementById('figura').innerHTML = 'Triângulo isósceles';
}



//Triangulo retangulo
function TrianguloRetangulo() {
    let base = +document.getElementById('BaseTrianguloRetangulo').value;
    let altura = +document.getElementById('AlturaTrianguloRetangulo').value;
    let profundidade = +document.getElementById('ProfundidadeTrianguloRetangulo').value;
    let area = 0;
    let volume = 0;
    let perimetro = 0;

    area = (altura * base) / 2;
    document.getElementById('resultado1').innerHTML = `Área: ${area}`

    perimetro = altura + base + (Math.sqrt(Math.pow(altura, 2) + Math.pow(base, 2)));
    document.getElementById('resultado2').innerHTML = `Perimetro: ${perimetro}`;

    volume = area * profundidade;
    document.getElementById('resultado3').innerHTML = `Volume: ${volume}`;

    document.getElementById('figura').innerHTML = 'Triângulo retângulo';
}

//circulo
function circulo() {
    let raio = +document.getElementById('RaioCirculo').value;
    let perimetro = 0;
    let area = 0;

    area = Math.PI * Math.pow(raio, 2);
    document.getElementById('resultado1').innerHTML = `Área: ${area}`


    perimetro = 2 * Math.PI * raio;;
    document.getElementById('resultado2').innerHTML = `Perimetro: ${perimetro}`;


    document.getElementById('figura').innerHTML = 'Circulo';
}
