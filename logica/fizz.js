/*FizzBuzz
Escribe un programa que recorra los números del 1 al 100:

Si el numero es multiplo de 3, imprime "Fizz" %3=0
Si el numero es multiplo de 5, imprime "Buzz" %5=0
Si el numero es multiplo de 3 y 5, imprime "FizzBuzz" &&
Si no es multiplo de ninguno, imprime el numero tal cual else

1. 100 numeros
2. Un bucle
3. Instrucciones
*/

let counter = 1;
do {
    if (counter % 3 === 0 && counter % 5 === 0 ){
        console.log(`El numero ${counter} es Fizzbuzz`);
    }
    else if(counter % 3 === 0){
        console.log(`El numero ${counter} es Fizz`);
    }
    else if(counter % 5 === 0){
        console.log(`El numero ${counter} es Buzz`);
    }
    else {console.log(counter);
    }
    counter++
 } while (counter <= 100)
