
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