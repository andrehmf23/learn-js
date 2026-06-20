
function FizzBuzz() {
    let fizz = false, buzz = false;
    for (let i = 1; i <= 100; i++) {
        fizz = i % 3;
        buzz = i % 5;
        if ( fizz == 0 ) {
            if ( buzz == 0) console.log("FizzBuzz");
            else console.log("Fizz");
        } else if ( buzz == 0 ) console.log("Buzz");
        else console.log(i);
    }
}

FizzBuzz();