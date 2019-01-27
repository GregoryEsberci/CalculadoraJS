function converter() {
    let converterDe = +document.getElementById('converterDe').value;
    let converterPara = +document.getElementById('converterPara').value;
    let valorConverter = +document.getElementById('valorConverter').value.replace(',', '.');
    let medidaConverter = 0;
    let resultado = 0;

    medidaConverter = converterPara / converterDe;

    resultado = medidaConverter * valorConverter;

    if (resultado % 1 != 0) {
        resultado = resultado.toFixed('6').replace('.', ',');
    }

    document.getElementById('resultado').innerHTML = resultado;

    medidaConverter = 0;
}

//Exibe listas

function listas() {
    let medida = document.getElementById('medida').value;

    //Limpa as options
    document.getElementById('converterPara').innerHTML = '';
    document.getElementById('converterDe').innerHTML = '';

    //distancia
    if (medida === 'distancia') {
        let = valores = 1;
        let medidas = [
            'Quilômetro (km)',
            'Hectômetro (hm)',
            'Decâmetro (dam)',
            'Metro (m)',
            'Decímetro (dm)',
            'Centímetro (cm)',
            'Milímetro (ml)',
        ]

        let distanciasConverterPara = document.getElementById('converterPara');
        let distanciasConverterDe = document.getElementById('converterDe');
        medidas.forEach((value) => {
            let optionDe = document.createElement('option');
            let optionPara = document.createElement('option');

            optionDe.text = value;
            optionDe.value = valores;
            distanciasConverterDe.add(optionDe);


            optionPara.text = value;
            optionPara.value = valores;
            distanciasConverterPara.add(optionPara);

            valores *= 10;
        })
    }

    if (medida === 'massa') {
        let = valores = 1;
        let medidas = [
            'Hectograma (hg)',
            'Quilograma (kg)',
            'Decagrama (dag)',
            'Grama (g)',
            'Decigrama (dg)',
            'Centigrama (cg)',
            'Miligrama (mg)',
        ]

        let distanciasConverterPara = document.getElementById('converterPara');
        let distanciasConverterDe = document.getElementById('converterDe');
        medidas.forEach((value) => {
            let optionDe = document.createElement('option');
            let optionPara = document.createElement('option');

            optionDe.text = value;
            optionDe.value = valores;
            distanciasConverterDe.add(optionDe);


            optionPara.text = value;
            optionPara.value = valores;
            distanciasConverterPara.add(optionPara);

            valores *= 10;
        })
    }

    if (medida === 'capacidade') {
        let = valores = 1;
        let medidas = [
            'Hectolitro (hl)',
            'Quilolitro (kl)',
            'decalitro (dal)',
            'litro (l)',
            'decilitro (dl)',
            'centilitro (cl)',
            'mililitro (ml)',
        ]

        let distanciasConverterPara = document.getElementById('converterPara');
        let distanciasConverterDe = document.getElementById('converterDe');
        medidas.forEach((value) => {
            let optionDe = document.createElement('option');
            let optionPara = document.createElement('option');

            optionDe.text = value;
            optionDe.value = valores;
            distanciasConverterDe.add(optionDe);


            optionPara.text = value;
            optionPara.value = valores;
            distanciasConverterPara.add(optionPara);

            valores *= 10;
        })
    }

    if (medida === 'volume') {
        let = valores = 1;
        let medidas = [
            'Hectômetro cúbico (hm3)',
            'Quilômetro cúbico (km3)',
            'Decâmetro cúbico (dam3)',
            'Metro cúbico (m3)',
            'Decímetro cúbico (dm3)',
            'Centímetro cúbico (cm3)',
            'Milímetro cúbico (mm3)',
        ]

        let distanciasConverterPara = document.getElementById('converterPara');
        let distanciasConverterDe = document.getElementById('converterDe');
        medidas.forEach((value) => {
            let optionDe = document.createElement('option');
            let optionPara = document.createElement('option');

            optionDe.text = value;
            optionDe.value = valores;
            distanciasConverterDe.add(optionDe);


            optionPara.text = value;
            optionPara.value = valores;
            distanciasConverterPara.add(optionPara);

            valores *= 10;
        })
    }
    if (medida === 'area') {
        let = valores = 1;
        let medidas = [
            'Quilômetro quadrado (km²)',
            'Hectômetro quadrado (hm²)',
            'Decâmetro quadrado (dam²)',
            'Metro quadrado (m²)',
            'Decímetro quadrado (dm²)',
            'Centímetro quadrado (cm²)',
            'Milímetro quadrado (mm²)',
        ]

        let distanciasConverterPara = document.getElementById('converterPara');
        let distanciasConverterDe = document.getElementById('converterDe');
        medidas.forEach((value) => {
            let optionDe = document.createElement('option');
            let optionPara = document.createElement('option');

            optionDe.text = value;
            optionDe.value = valores;
            distanciasConverterDe.add(optionDe);


            optionPara.text = value;
            optionPara.value = valores;
            distanciasConverterPara.add(optionPara);

            valores *= 100;
        })
    }
}

listas();
