/*# 
Crear una función constructora de objetos Car

- Crear una función que permita crear un objeto Car mediante el constructor `new`, 
 el objeto deberá tener las siguientes propiedades:
   - Publicas:
      - `model`
      - `brand`
      - `year`
    - Privadas:
      - `id` generada automáticamente al crear el objeto.
- El objeto deberá tener las siguientes métodos:
   - Públicos:
     - `getCarName` deberá devolver un String con el modelo, marca y año del auto.
- Crear tres objetos usando los datos de prueba y probar su método `getCarName`.
*/


function Car(modelParam, brandParam, yearParam) {
    this.model = modelParam; //funciones publicas
    this.brand = brandParam;
    this.year = yearParam;

    let id = Math.random();

    this.getCarName = function() {
        return this.model + ' ' + this.brand + ' ' + this.year;
    };

    this.calcularantiguedad = function (){ 
        console.log('La antiguedad del auto es  ' + (2019 - this.year));
    }

}

var car1 = new Car('Suran','Volkswagen', 2015);
console.log(car1.getCarName());
car1.calcularantiguedad();



var car2 = new Car('Ford','Fiesta', 2018);
console.log(car2.getCarName());
car2.calcularantiguedad();



var car3 = new Car('Audi','A5', 2009);
console.log(car3.getCarName());
car3.calcularantiguedad();







