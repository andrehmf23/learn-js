const array = [1,2,3,4,5,6,7,8,9,2,4,2]

function sum(array) {
    let result = 0;

    for (element of array) {
        result += element;
    }

    return result;
}

function maior(array, pos=1) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] < array[j]) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array[pos-1];
}

function menor(array, pos=1) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array[pos-1];
}

function removeDuplicadas(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length;) {
            if (array[i] === array[j]) {
                array.splice(j,1);
            } else j++;
        }
    }

    return array;
}

function intersecao(arrayx, arrayy){
    let out = [];

    for (const element of arrayx) {
        if (arrayy.includes(element) && !out.includes(element)) {
            out.push(element);
        }
    }

    return out;
}

function diferenca(arrayx, arrayy){
    let out = [];

    for (const element of arrayx) {
        if (!arrayy.includes(element) && !out.includes(element)) {
            out.push(element);
        }
    }

    return out;
}

function order(x) {

    for (let i = 0; i < x.length; i++) {
        for (let j = i + 1; j < x.length; j++) {
            if (x[i] > x[j]) {
                const temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }

    return x;
}

function searchB(x, y) {
    let start = 0;
    let end = x.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (x[middle] < y) {
            start = middle + 1;
        } else if (x[middle] > y) {
            end = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function chunk(array, size) {
    // 0, 2, 4, 6 <-
    let result = [];
    for (let i = 0; i < array.length; i+=size) {
        result.push(array.slice(i,i+size));
    }
    return result;
}

console.log(sum(array))
console.log(menor(array, 1))
console.log(maior(array, 1))
console.log(removeDuplicadas(array))
console.log(intersecao([1,6,4,3,7,9,4], [2,3,4,5,6,2,3,0]))
console.log(diferenca([1,6,4,3,7,9,4], [2,3,4,5,6,2,3,0]))
console.log(order(["andre", "maria", "bruno", "gustavo", "mario", "felipe"]))
console.log(searchB([1,4,6,7,23,67,88,91,104], 4))

console.log(array)
shuffle(array)
console.log(array)
console.table(chunk(array, 2))