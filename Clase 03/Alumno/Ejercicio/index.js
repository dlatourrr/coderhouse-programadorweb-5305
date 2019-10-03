/*# Crear un programa que muestre si un día es fin de semana

- Usando el Array de ejemplo como dato inicial crear un programa que lo recorra e identifique si 
el día es fin de semana, día hábil o no es un día valido. El programa tiene que poder 
reconocer los días con y sin tilde.

```js
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]
``` */

var value;
do {
value = prompt('Ingrese un día de la Semana');
} while (value <= 5);

console.log(value);


var diasHabiles = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for (var i = 0; i < diasHabiles.length; i++) {
  var day = diasHabiles[i]
  console.log(day)
}