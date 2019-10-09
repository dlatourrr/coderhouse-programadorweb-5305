/*
# Crear una función constructora de objetos Student

- Crear una función que permita crear un objeto Student mediante el constructor `new`, 
el objeto deberá tener las siguientes propiedades:
   - Publicas:
      - `firstName`
      - `lastName`
      - `dni`
      - `email`
    - Privadas:
      - `id` generada automáticamente al crear el objeto.
- El objeto deberá tener las siguientes métodos:
   - Públicos:
     - `getId` deberá devolver el `id` del objeto
     - `getFullName` deberá devolver un String con el nombre completo del objeto, 
     salvando los casos donde el `firstName` o`lastName` sea `undefined`.
- Crear tres alumnos usando los datos de prueba y probar sus métodos.

**Datos de prueba:**

```js
var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]
```

> Existe una función que devuelve un número random que nos puede servir para hacer un id único.
*/


function Student(firstNameParam, lastNameParam, dniParam, mailParam) {
    this.firstName = firstNameParam; //propiedades publicas
    this.lastName = lastNameParam;
    this.dni = dniParam;
    this.mail = mailParam;


    let id = Math.random();

    this.getFullName = function() {
        if (this.firstName === undefined || this.lastName === undefined) {
            return 'El nombre o el apellido son incorrectos'
        }
        return this.firstName + ' ' + this.lastName;
    };

    this.getId = function() {
        return id;
    }

    

}


var alumno1 = new Student('Juan','Pérez', 45678987, 'juan@gmail.com');
console.log(alumno1.getFullName());

var alumno2 = new Student('Ana','Fernandez', 45678989, 'ana@gmail.com');
console.log(alumno2.getFullName());

var alumno3 = new Student('Pedro','Mármol', 45678956, 'pedro@gmail.com');
console.log(alumno3.getFullName());






