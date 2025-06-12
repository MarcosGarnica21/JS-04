let counter = 0;
const username = prompt("Ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];

alert("Vamos a pedirte tus 5 películas ok???")
for (i= 1; i <= 5; i++){
    //Back tics para concatenar: `
    favoriteMovies.push(prompt(`Ingresa la película número ${i}`));
}

console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:`)

while(counter < favoriteMovies.length){
    console.log(`Mi película favorita número ${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++;
}