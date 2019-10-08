/*Crear una función que permita buscar un alumno [Pieza del Workshop I]

Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre 
o apellido, si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario -1.
La función solo encuentra coincidencias exactas, por ejemplo encuentra Fernandez, 
pero no Fer o fernandez.
Probar que funcione correctamente. */


var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]

let misDatos = prompt('Ingrese su nombre: ');

function buscarAlumno(texto,alumnos) {
  
    let posición = -1;

    for (let i = 0; i < alumnos.length; i++) {
      let alumno = alumnos[i];
      if (alumno.firstName === texto || alumno.lastName === texto){
          posición = i;
        }

    

    }

     
    return posición;
      
 
}

console.log(buscarAlumno(misDatos,studentsList));

