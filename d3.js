
const c = 42;
const f = 120;

const CelsiusToFahrenheit = (x) => x*(9/5)+32
const FahrenheitToCelsius = (x) => (x-32)*(5/9)

console.log(CelsiusToFahrenheit(c).toFixed(2))
console.log(FahrenheitToCelsius(f).toFixed(2))