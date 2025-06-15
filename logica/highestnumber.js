/*Highest number
Write a program that asks for 10 numbers.
Using logical operators and any other javascript functions/structures you've seen before, 
determine and output the highest of those numbers.

1. Pide al usuario que ingrese 10 numeros - guardalo en un array
2. Ordenalos - sort de menor a mayor o de mayor a menor
3. Da el numero más grande entre ellos - imprime la posición donde esté el mas grande 

*/ 
const numArray = [];
for (i = 1; i <= 10; i++){
   numArray.push(prompt(`Ingresa el número ${i}`));
}
const numOrd = numArray.sort((a,b) => a - b); //ordeno de menor a mayor
//console.log(numOrd);
console.log("El número mayor es " + numOrd[numArray.length - 1]); //accedo al ultimo elemento porque ya estan ordenados