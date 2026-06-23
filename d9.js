
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