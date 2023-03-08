// The main variable Kelvin
var kelvin = prompt("Whats the temperature in Kelvin you want to convert?");
// Converting kelvin to celsius
var celsius = kelvin- 273;
console.log(`The temperature is ${Math.floor(celsius)} degrees celsius.`);
// Converting celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);
// Converting celsius to  Newton scale
var  NewtonScale = celsius * (33/100);
console.log(`The temperature is ${Math.floor(NewtonScale)} degrees Newton scale.`);