
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