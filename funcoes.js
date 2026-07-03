
// Calculadora Modular — funções separadas.

const somar = (a,b) => a + b;
const subtrair = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;

// Callback Personalizado — executar função recebida.

const hi = () => console.log("Hello!");

function execute(f){
    f();
}

execute(hi)

// Criar map()

function remap(array, callback = (x) => x) {
    const narray = [];
    for (const key in array) {
        if (!Object.hasOwn(array, key)) continue;
        
        narray.push(callback(array[key]));
    }

    return narray;
}

console.log(remap([1,5,4,9,3], (x) => x * 4));

// Criar filter()

function refilter(array, callback = (x) => true) {
    const narray = [];
    for (const key in array) {
        if (!Object.hasOwn(array, key)) continue;

        if (callback(array[key])) narray.push(array[key]);
    }

    return narray;
}

console.log(refilter([1,5,4,9,3], (x) => x > 4));

// Criar reduce()

function rereduce(array, callback, valueinitial = 0) {
    let acculate = valueinitial;
    for (const element of array) {
        acculate = callback(acculate, element);
    }
    return acculate;
}


console.log(
    rereduce([1,5,4,9,3], 
        (acc, value) => acc + value,
        0)
    )

// debounce

function debounce(callback, timer = 100) {
    let time = null;
    console.log("teste")

    return () => {
        if (time !== null) clearTimeout(time);
        time = setTimeout(callback, timer);
    }

}

const campoDebounce = document.getElementById("campoDebounce");
campoDebounce.addEventListener("input", 
    debounce(() => {
        console.log(campoDebounce.value);
    }, 5000))

// throttle

function throttle(callback, timer) {
    let active = true;

    return () => {
        if (active) {
            active = false;
            setTimeout(() => {
                active = true;
                callback()
            }, timer);
        }
    }
}


window.addEventListener("scroll", throttle(() => {
    console.log(window.scrollY);
}, 2000))

// memoization

function memoization(callback) {
    const memory = {};
    
    return (input) => {
        if (memory[input] === undefined || memory[input] === null) memory[input] = callback(input);
        return memory[input];
    };
}

const btn1 = document.getElementById("btn1");
const campoMemoization = document.getElementById("campoMemoization");
const fm = memoization((x) => x**x);

btn1.addEventListener('click', function() {
    console.log(fm(campoMemoization.value));
})