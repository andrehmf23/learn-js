const array = [10, 34, 2, 45, 18, 43, 55, 12, 46, 15];

function maior(array, pos) {
    let n_maior = null;

    for (let i = 0; i < pos; i++) {
        let pos_maior = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[pos_maior] < array[j]) pos_maior = j;
        }
        n_maior = array.splice(pos_maior, 1);
    }

    return n_maior;
}

console.log(maior(array,2));