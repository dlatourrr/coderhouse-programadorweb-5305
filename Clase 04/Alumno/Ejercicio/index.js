/*Crear una función que calcule el promedio de un array
Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos 
los números.
Probar la función.
Hint: Recordar que el promedio se calcula sumando todos los valores de las notas y dividiendo
ese número por la cantidad de notas. Ej: Notas: [ 4, 2, 3 ] => Promedio: (4 + 2 + 3) / 3 = 3 */





var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]  //esto es el ARRAY

function calcularPromedio(resultadosExamenes) {

   let suma = 0;
   let prom;

   //el ciclo flor nos ayuda a recorrer los elementos e ir sumando
   for (let i = 0; i < resultadosExamenes.length; i++) {
       let nota = resultadosExamenes[i];
       suma += nota;
    } 

    prom = suma / resultadosExamenes.length;

    return prom;
}

let promedio = calcularPromedio(examResults);
console.log('El promedio es ' + promedio);

//console.log('El promedio es: ' + calcularPromedio(examResults));