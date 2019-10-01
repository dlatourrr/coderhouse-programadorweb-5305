/*- Pedir al usuario mediante `prompt` que ingrese su género y luego su edad. 
Luego mostrar un mensaje en consola que diga `Sr.`, `Sra.` o `Sx.`según corresponda y 
que también evalue si es mayor de edad o no al momento de construir el mensaje.
Por ejemplo si el usuario ingresa `male` y `16`, el mensaje debería ser `Sr. 
usted es menor de edad no puede ingresar`, si ingresa `female` y `34`el mensaje sería 
`Sra. usted es mayor de edad puede ingresar`.*/ 

//pedir por proomp género//
 let variableDelPrompt = prompt('Ingrese su genero');
 let variableDeLaEdad = parseInt (prompt('Ingrese su edad'));

 let genero;
    switch (variableDelPrompt) {
        case 'masculino':
            genero = 'Sr.';
        break;
        case 'femenino':
            genero = 'Sra.';
        break;
        default:
            genero = 'No es un genero';
        break;
    }

let edad;
    if (variableDeLaEdad > 18) {
    edad = 'usted es mayor de edad';
    } 
    else {
    edad = 'usted es menor de edad';
    }

console.log(genero + edad);