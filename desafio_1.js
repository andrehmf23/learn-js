const word = "live";

function inverter(aword) {
    let word = "";
    const size = aword.length - 1;

    for (let i = size; i >= 0; i--) {
        word += aword[i];
    }

    return word;
}

console.log(inverter(word));