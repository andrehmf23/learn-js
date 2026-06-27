
// Agenda de contatos

let contatos = [];

const add = (nome, numero, endereco) => contatos.push({
    "nome": nome,
    "numero": numero,
    "endereco": endereco
})

const remove = (nome) => {
    const index = contatos.findIndex(contato => contato.nome === nome);

    if (index > -1) {
        contatos.splice(index, 1);
    }
}

const update = (nome, numero=null, endereco=null) => {
    contato = contatos.find(contato => contato.nome === nome);
    contato.numero = numero;
    contato.endereco = endereco;
}

add("João", 28738971297369, "São Paulo");
console.table(contatos)
update("João", 23167923676, "Rio de Janeiro");
console.table(contatos)
remove("João");
console.table(contatos)

// Contador de frequencia

function frequencia(data, item) {
    let count = 0;

    data.forEach((i) => {
        if(i == item) count++;
    })
    return count;
}

console.log(frequencia(["vermelho", "azul", "verde", "preto", "vermelho", "azul", "azul", 3, 97], "3"));


// Agrupar objetos

const filmes = [
    { nome: "Matrix", ano: 1999, genero: "Ficção Científica" },
    { nome: "O Poderoso Chefão", ano: 1972, genero: "Drama" },
    { nome: "Interestelar", ano: 2014, genero: "Ficção Científica" },
    { nome: "O Rei Leão", ano: 1994, genero: "Animação" },
    { nome: "Batman: O Cavaleiro das Trevas", ano: 2008, genero: "Ação" }
];

const grupos = Object.groupBy(
    filmes,
    (filme) => filme.genero
);

console.log(JSON.stringify(grupos));

// Indexar por ID — transformar array em objeto.

const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "Maria" }
];

let atalho = {};

for (const i in usuarios) {
    if (!Object.hasOwn(usuarios, i)) continue;

    atalho[i] = usuarios[i];
}

console.log(JSON.stringify(atalho))

// Mesclar Objetos — unir propriedades.

const usuario = {
    nome: "João",
    idade: 32
};

const contato = {
    email: "joão@email.com",
    telefone: "99999-9999"
};






