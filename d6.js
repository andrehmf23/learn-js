
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