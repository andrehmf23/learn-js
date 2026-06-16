const word = "osso";

function palindromo(aword) {
    const size = aword.length;

    for (let i = 0; i < size / 2; i++) {
        console.log(aword[i], "=", aword[size - 1 - i]);

        if (aword[i] !== aword[size - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindromo(word));