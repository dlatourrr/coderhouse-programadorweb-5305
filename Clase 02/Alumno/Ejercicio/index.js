//pedir por proomp un dia de la semana//
let diaDeLaSemana = prompt('Ingrese un día de la semana: ');

//mostrar en consola un mensaje si el día es fin de semana, hábil o no es un día valido//
//toLowerCase() lo convierte todo en minusculas  Lunes o lunes//
switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'miércoles': //se agrega dos variables por el tema de la tilde//
    case 'jueves':
    case 'viernes':
        console.log('Es un día habil');
        break;

    case 'sabado':
    case 'sábado':
    case 'domingo':
        console.log('Es un día de fin de semana')
        break;
           

    default:
        console.log('No es un día válido')
        break;
}