let x = 13;

function fatorial() {
    console.log(x)
    if (x == 1) return 1;
    return x-- * fatorial();
}

console.log(fatorial())