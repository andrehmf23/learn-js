let word = "Analise";
word = word.toLowerCase();

function total_vogal(aword) {
    let counter = 0;
    for (const element of aword) {
        console.log(element)
        if (['a', 'e', 'i', 'o', 'u'].includes(element)) counter++;
    }
    return counter;
}

console.log("Total de vogais: ", total_vogal(word))