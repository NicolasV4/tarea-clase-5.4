//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $numeros = document.querySelectorAll('li')
let arrayNumeros = [];

for ( i = 0; i < $numeros.length ; i++){
    arrayNumeros.push(Number($numeros[i].innerText))
}

function dividir(numero1, numero2){
    return numero1 / numero2
}

//calcular promedios
let sumatoriaDeNumeros = 0; //calcula total de los numeros

for(let i = 0; i < arrayNumeros.length; i++){                
    sumatoriaDeNumeros += arrayNumeros[i];
}

document.querySelector('#promedio').innerText = dividir(sumatoriaDeNumeros,arrayNumeros.length)


//calcular numero menor
let valorNumeroMenor;

for (let i = 0; i < arrayNumeros.length; i++){
    let menor = arrayNumeros[i];
    if(valorNumeroMenor<menor){
        menor = valorNumeroMenor
    }else {
        valorNumeroMenor = arrayNumeros[i];
    }
}

document.querySelector('#pequeño').innerText = valorNumeroMenor

//calcular numero mayor
let valorNumeroMayor;

for (let i = 0; i < arrayNumeros.length; i++){
    let mayor = arrayNumeros[i];
    if(valorNumeroMayor>mayor){
        mayor = valorNumeroMayor
    }else {
        valorNumeroMayor = arrayNumeros[i];
    }
}

document.querySelector('#grande').innerText = valorNumeroMayor

//calcular el numero mas repetido

let repetidorMayor = 0;
for (let i = 0; i < arrayNumeros.length; i++){
    let repetidor = 0;


    for (let j = 0; j < arrayNumeros.length; j++){
        if (arrayNumeros[i] === arrayNumeros[j]){
            repetidor +=1;
        }
    }
    
    if (repetidor > repetidorMayor){
        repetidorMayor = repetidor
        document.querySelector('#comun').innerText = arrayNumeros[i];
    }
}
