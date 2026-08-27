export function run() {
    //counter(17);
    //imparOuPar([1,50,58,43,42,73,5,7,4])
    //maiorEMenor([45,23,54,21,55,21,89,21,14,76])
    //inverterArray([1,50,58,43,42,73,5,7,4])
    //removeDuplicates([2,4,6,2,4,6,3,2,4,7,8,1])
    julgamentoDosAlunos([
    { nome: "João", idade: 20, nota: 8.5 },
    { nome: "Maria", idade: 22, nota: 9.2 },
    { nome: "Pedro", idade: 19, nota: 7.8 },
    { nome: "Ana", idade: 21, nota: 8.9 },
    { nome: "Lucas", idade: 20, nota: 6.5 },
    { nome: "Juliana", idade: 23, nota: 9.7 },
    { nome: "Carlos", idade: 18, nota: 7.2 },
    { nome: "Beatriz", idade: 21, nota: 8.1 },
    { nome: "Rafael", idade: 22, nota: 5.9 },
    { nome: "Fernanda", idade: 20, nota: 9.0 }
])
}

function counter(input) {
    for (let i = 0; i < input; i++) {
        console.log(i);
    }
}

function imparOuPar(input) {
    input.forEach(i => {
        console.log(`${i}: ${i % 2 ? 'impar' : 'par'}`)
    });
}

function maiorEMenor(input) {
    if (input.length === 0) {
        console.log("Nenhum dado encontrado!");
        return null;
    }
    
    let maior = input[0], menor = input[0];
    for (let i = 1; i < input.length; i++) {
        if (maior < input[i]) {
            maior = input[i];
        } else if (menor > input[i]) {
            menor = input[i];
        }
    }

    console.log("O maior número do vetor é ", maior);
    console.log("O menor número do vetor é ", menor);
}

function inverterArray(input) {
    for (let i = 0; i < Math.round(input.length / 2); i++) {
        let temp = input[i];
        input[i] = input[(input.length - 1) - i]
        input[(input.length - 1) - i] = temp;
    }

    console.log(input)
}

function removeDuplicates(input) {
    let temp = [];

    for (let i = 0; i < input.length; i++) {
        if (!temp.includes(input[i])) {
            temp.push(input[i])
        }
    }

    console.log(temp);
}

function julgamentoDosAlunos(input) {
    const dd = {}
    const ff = []

    let maior = input[0], menor = input[0], media = input[0]['nota'], aprovados = [], reprovados = []; 
    for (let i = 1; i < input.length; i++) {
        if (maior['nota'] < input['nota']) {
            maior = input['nota'];
        } else if (menor['nota'] > input['nota']) {
            menor = input['nota'];
        }
        media += input[i]['nota'];
    }

    for (let i = 0; i < input.length; i++) {
        if (input['nota'] >= 7) {
            aprovados.push(input['nome'])
        } else {
            reprovados.push(input['nome'])
        }
    }

    media /= input.length;

    console.log("Maior nota: ", maior);
    console.log("Menor nota: ", menor);
    console.log("Média das notas ", media);
    console.log("Aprovados: ", aprovados);
    console.log("Reprovados: ", reprovados);

}
