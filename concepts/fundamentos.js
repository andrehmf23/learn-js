
console.log("Hello World!")

// Calculador

const sum = (x,y) => x+y;
const sub = (x,y) => x-y;
const mul = (x,y) => x*y;
const div = (x,y) => x/y;

console.log(sum(2,3), " ", sub(2,3), " ", mul(2,3), " ", div(2,3))

// Celsius e Fahrenheit

const c = 42;
const f = 120;

const CelsiusToFahrenheit = (x) => x*(9/5)+32
const FahrenheitToCelsius = (x) => (x-32)*(5/9)

console.log(CelsiusToFahrenheit(c).toFixed(2))
console.log(FahrenheitToCelsius(f).toFixed(2))

// Par ou Ímpar

const x = 128;

console.log(x % 2 == 0 ? "Par" : "Impar")

// Factorial

let x = 13;

function fatorial() {
    console.log(x)
    if (x == 1) return 1;
    return x-- * fatorial();
}

console.log(fatorial())

// Fibonacci

function fibonacci(x) {

    if (x <= 0) return [];
    else if (x == 1) return [1];

    const sequence = [1, 1];

    x -= 2;

    for (let i = 0; i < x; i++) {
        sequence.push(sequence[i] + sequence[i+1]);
    }

    return sequence;
}

console.log(fibonacci(100))

// Primo

function is_prime(x) {
    if (x < 2) return false;
    else if (x == 2) return true;
    else if (x % 2 == 0) return false;

    for (let i = 3; i < x; i+=2) {
        if (x % i == 0) return false;
    }

    return true
}

console.log(is_prime(999999937))

// FizzBuzz

function FizzBuzz(x = 1) {
    if (x == 100) return;
    else if (x % 3 == 0) {
        if (x % 5 == 0) console.log("FizzBuzz");
        else console.log("Fizz");
    }
    else if (x % 5 == 0) console.log("Buzz");
    else console.log(x);

    FizzBuzz(++x);
}

FizzBuzz()

// Palíndromo

function palindromo(x) {
    x = x.toLowerCase();
    
    const size = x.length;
    const optimize = Math.trunc(size / 2);

    for (let i = 0; i < optimize; i++) {
        if (x[i] !== x[size-1-i]) return false;
    }
    return true;
}

console.log(palindromo("osso"))

// Inverter

function inverter(x="") {
    const y = x.split("");
    const optimize = Math.floor(y.length/2);
    let temp;

    for (let i = 0; i < optimize; i++) {
        temp = y[i];
        y[i] = y[y.length - 1 - i];
        y[y.length - 1 - i] = temp;
    }

    return y.join("");
}

console.log(inverter("evil"))
