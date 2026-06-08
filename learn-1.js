// Variáveis

// let -> variável reatribuível com escopo de bloco
// const -> variável não reatribuível com escopo de bloco
// var -> variável com escopo de função e hoisting

// Propriedades

// 1 - Escopos filhos conseguem acessar variáveis
// dos escopos pais (scope chain), mas não o contrário.

// 2 - Variáveis são registradas antes da execução
// (hoisting), porém a inicialização depende do tipo
// da declaração (var, let, const).

// Aritimética
// Basico -> +, -, *, /
// Atribuição -> =
// Comparação -> <, >, =<, =>, ===

// Só existe no seu contexto

console.log(" " + 10 - 2)



{
    var y = 2;
    {
        let y = 1;
        console.log(y)
    }
}

{
        console.log(y)

}


try {
    console.log(process.memoryUsage());
} catch (error) {
    console.log(error)
}