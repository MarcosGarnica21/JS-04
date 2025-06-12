/**
 * Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
    1. Array con resistencias
    2. Conocer el valor absoluto de cada elemento Math.abs()
        2.1 Map
    3. Suma de las resistencias reduce()
    4. Retornar numero ohms

 */
function sumOFResistors(resistors){
    const resistorsAbs = resistors.map((resistor) => Math.abs(resistor));
    const totalResistence = resistorsAbs.reduce((total, curent) => total + curent, 0);
    return `${totalResistence} ohms`
}

console.log(sumOFResistors([-1,5,6,3]));
console.log(sumOFResistors([14,3.5,6]));
console.log(sumOFResistors([8,15,100]));
