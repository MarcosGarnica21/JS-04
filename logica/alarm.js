/**
 Alarm
Write a program that asks a user for the amount of seconds needed until
an alarm (message) is executed alongside a text to show once those
seconds have passed in real time.

1. Preguntar al usuario en cuantos segundos quiere que suene su alarma - prompt
2. Ejecutar un conteo por segundo en tiempo real para que suene su alarma - bucle o funcion
3. Al finalizar ese conteo mostrar un mensaje de alarma - break console

 */

const time = prompt("¿En cuántos segundos quieres que suene tu alarma?");

let timeRemaining = time; //Empezar a hacer un conteo regresio

let intervalo = setInterval(() => {  
    timeRemaining--;
    //console.log(`Tiempo restante ${timeRemaining}`); //mostrar el tiempo que queda de alarma

  if (timeRemaining<= 0) {
    clearInterval(intervalo);
    alert("Ya es hora!!!!");
  }
}, 1000); // por 1000 milisegundos pra que se ejecute cada segundo