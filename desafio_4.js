const array = ["vermelho", "azul", "verde", "roxo", "verde", "amarelo", "vermelho", "cinza", "cinza"]

function unico(array){
    let newarray = []
    for (const element of array) {
        if (!newarray.includes(element)) newarray.push(element);
    }
    return newarray;
}

console.log(unico(array))