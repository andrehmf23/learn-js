const array = ["vermelho", "verde", "azul", "verde", "roxo", "verde", "amarelo", "vermelho", "cinza", "cinza"];

function contar(array = []) {
    const list = {};

    for (const element of array) {
        if (list[element] === undefined) {
            list[element] = 1;
        } else {
            list[element]++;
        }
    }

    for (const key in list) {
        console.log(key, " = ", list[key])
    }
}

contar(array)