
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

function mesclar(obj1, obj2) {
    let result = {};
    for (const element of Object.entries(obj1)) {
        result[element[0]] = element[1];
    }
    for (const element of Object.entries(obj2)) {
        result[element[0]] = element[1];
    }
    return result
}

console.log(mesclar({
    nome: "João",
    idade: 32
}, 
{
    email: "joão@email.com",
    telefone: "99999-9999"
}));

// Deep Clone — copiar objetos profundamente.

const empresa = {
    nome: "Tech Solutions",

    endereco: {
        cidade: "São Paulo",
        estado: "SP",

        coordenadas: {
            latitude: -23.5505,
            longitude: -46.6333
        }
    },

    funcionarios: [
        {
            nome: "Ana",
            habilidades: ["JavaScript", "TypeScript"],
            contato: {
                email: "ana@email.com"
            }
        },
        {
            nome: "Carlos",
            habilidades: ["Python", "SQL"],
            contato: {
                email: "carlos@email.com"
            }
        }
    ],

    departamentos: [
        {
            nome: "TI",
            projetos: [
                { nome: "Sistema A" },
                { nome: "Sistema B" }
            ]
        }
    ]
};

function deepClone(obj) {

    let result = Array.isArray(obj) ? [] : {};

    if (Array.isArray(obj)) {
        for (const item of obj) {
            result.push(
                typeof item === "object" && item !== null
                    ? deepClone(item)
                    : item
            );
        }
    } else {
        for (const element of Object.entries(obj)) {
            result[element[0]] = 
            typeof element[1] === "object" && element[1] != null ? 
            deepClone(element[1]) : 
            element[1];
        }
    }

    return result;
}

const copyempresa = deepClone(empresa);
copyempresa.nome = "Tech Analytics"

console.log(JSON.stringify(empresa));
console.log(JSON.stringify(copyempresa));

// Comparar Objetos — verificar igualdade.

function compareObj(obj1, obj2) {

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        const size = obj1.length;
        if (size !== obj2.length) return false;

        for (let i = 0; i < size; i++) {
            if (obj1[i] !== obj2[i]) return false;
        }
        
    } else if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
        const e1 = Object.entries(obj1);
        const size = e1.length;
        const e2 = Object.entries(obj2);
        if (size !== e2.length) return false;
        
        console.log("Size: ", size)
    
        for (let i = 0; i < size; i++) {
            if (e1[i][0] !== e2[i][0] || e1[i][1] !== e2[i][1]) return false;

            if ((typeof e1[i][1]) === (typeof e2[i][1]) && typeof e1[i][1] === "object" && !compareObj(e1[i][1],e2[i][1])) return false;
        }
    } else return false;
    

    return true;
}

console.log({nome: "Felipe", idade: 18})


console.log(compareObj({nome: "Felipe", idade: 18},{nome: "Felipe", idade: 18}))



