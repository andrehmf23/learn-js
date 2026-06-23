
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

