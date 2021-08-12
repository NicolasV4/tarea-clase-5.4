//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $numeros = document.querySelectorAll('li')

//calcular promedios
let sumatoriaDeNumeros = 0; //calcula total de los numeros

for(let i = 0; i < $numeros.length; i++){                
    sumatoriaDeNumeros += Number($numeros[i].innerText);
}

function promedio(numero1,cantidad){
    return numero1 / cantidad
}

document.querySelector('#promedio').innerText = promedio(sumatoriaDeNumeros,$numeros.length)



//calcular numero menor
let valorNumeroMenor;

for (let i = 0; i < $numeros.length; i++){
    let menor = Number($numeros[i].innerText)
    if(valorNumeroMenor<menor){
        menor = valorNumeroMenor
    }else {
        valorNumeroMenor = Number($numeros[i].innerText)
    }
}

document.querySelector('#pequeño').innerText = valorNumeroMenor

//calcular numero mayor
let valorNumeroMayor;

for (let i = 0; i < $numeros.length; i++){
    let mayor = Number($numeros[i].innerText)
    if(valorNumeroMayor>mayor){
        mayor = valorNumeroMayor
    }else {
        valorNumeroMayor = Number($numeros[i].innerText)
    }
}

document.querySelector('#grande').innerText = valorNumeroMayor

//calcular el numero mas repetido

let repetidorMayor = 0;
for (let i = 0; i < $numeros.length; i++){
    let repetidor = 0;


    for (let j = 0; j < $numeros.length; j++){
        if ($numeros[i].innerText === $numeros[j].innerText){
            repetidor +=1;
        }
    }
    
    if (repetidor > repetidorMayor){
        repetidorMayor = repetidor
        document.querySelector('#comun').innerText = $numeros[i].innerText
    }
}
