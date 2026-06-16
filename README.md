# learnjs
Reaprendendo o basico do js para relembrar frameworks web
## Variáveis
- let
- const
- var
## Tipos de dados
- String
- Number
- Bigint
- Boolean
- Object
- Undefined
- Null
- Symbol
## Operdaores
### Aritimética
### Comparação
## todo
Lista de tópicos de estudo a serem visto:
- Protocolos
- Comunicação entre linguagens
- DOM
- Sequência e objetos de interpretação e execução
- ES modules + Evoluções?

## info
### Sequencia
1. Browser pede HTML
2. HTML é parseado
3. DOM é criado
4. CSS é baixado
5. CSSOM é criado
6. DOM + CSSOM = Render Tree
7. Layout (posição dos elementos)
8. Paint (desenha pixels)
9. JS executa e pode alterar tudo

### Protocolo
Usuário
   ↓
URL
   ↓
DNS
   ↓
TCP/IP
   ↓
HTTPS
   ↓
HTTP Request
   ↓
Servidor
   ↓
HTML
 ├── CSS
 ├── JS
 └── Assets
   ↓
Browser
   ├── DOM
   ├── CSSOM
   ├── JS Engine
   └── Render
   ↓
Tela

A grande sacada é:

HTML, CSS e JS

### Renders
Browser Process
│
├── Render Process (aba/site)
│     ├── DOM
│     ├── CSSOM
│     ├── JS Engine
│     └── Memory Heap
│
└── outras abas

### Remenber Syntax
### OBS
// Conceitualização aplicada
// Memória
// Executor

// Variaveis

# Desafios

## Nível 1 — Base do JavaScript

1. **Inverter String** — inverter uma string sem usar `.reverse()`.
2. **Contador de Vogais** — contar quantas vogais existem em uma frase.
3. **Palíndromo** — verificar se uma palavra é igual ao contrário.
4. **Remover Duplicados** — remover valores repetidos de um array.
5. **Segundo Maior Número** — encontrar o segundo maior valor de um array.
6. **Contador de Frequência** — contar quantas vezes cada item aparece.
7. **FizzBuzz** — imprimir números, trocando múltiplos por palavras.
8. **Números Primos** — gerar números primos até um limite.
9. **Fibonacci** — gerar sequência de Fibonacci.
10. **Arrays em Comum** — verificar se dois arrays possuem elementos iguais.
11. **Ordenação Manual** — criar algoritmo de ordenação sem `.sort()`.
12. **Caixa Eletrônico** — calcular notas para sacar um valor.
13. **Agrupar Usuários** — agrupar objetos por idade ou categoria.
14. **Transformar Array em Objeto** — converter lista em objeto indexado por ID.
15. **Carrinho de Compras** — adicionar, remover e calcular total.

---

## Nível 2 — Funções e Assincronismo

16. **Criar `.map()`** — recriar funcionamento do `.map()`.
17. **Criar `.filter()`** — recriar funcionamento do `.filter()`.
18. **Criar `.reduce()`** — recriar funcionamento do `.reduce()`.
19. **Debounce** — limitar chamadas repetidas de função.
20. **Throttle** — controlar frequência de execução.
21. **Sleep/Delay** — criar espera usando Promise.
22. **Requisições Paralelas** — executar várias promises juntas.
23. **Retry Automático** — tentar novamente se uma request falhar.
24. **Timeout de Promise** — cancelar promise após tempo limite.
25. **Limitador de Requisições** — limitar quantas tasks rodam ao mesmo tempo.

---

## Nível 3 — DOM e Front-End

26. **Todo List** — criar lista de tarefas.
27. **Calculadora** — fazer operações matemáticas.
28. **Cronômetro** — criar timer com iniciar/parar.
29. **Pomodoro** — timer de produtividade.
30. **Kanban Simples** — mover tarefas entre colunas.
31. **Sistema de Notas** — salvar anotações.
32. **Conversor de Moedas** — converter valores entre moedas.
33. **Busca em Tempo Real** — filtrar conteúdo digitando.
34. **Infinite Scroll** — carregar mais itens ao rolar página.
35. **Dark Mode Persistente** — salvar tema do usuário.
36. **Modal do Zero** — criar janela popup.
37. **Tabs Navegáveis** — alternar conteúdo por abas.
38. **Drag and Drop** — arrastar elementos.
39. **Autocomplete** — sugerir resultados enquanto digita.
40. **Upload com Preview** — mostrar imagem antes de enviar.

---

## Nível 4 — APIs

41. **API de Filmes** — buscar filmes numa API.
42. **API de Clima** — mostrar clima de cidades.
43. **Paginação** — dividir conteúdo em páginas.
44. **Busca com Debounce** — evitar muitas requests digitando.
45. **Loading/Skeleton** — mostrar carregamento visual.
46. **Cache Local** — armazenar dados temporariamente.
47. **Tratamento de Erros** — lidar com falhas de API.
48. **Dashboard de Filmes** — painel com filmes e filtros.
49. **Clone do Trello** — sistema estilo tarefas em colunas.
50. **Clone do Spotify** — interface de player musical.
51. **Dashboard Financeiro** — controle de gastos e gráficos.
52. **Sistema de Tarefas com Login Fake** — autenticação simulada.
53. **Chat em Tempo Real** — mensagens instantâneas.

---

## Nível 5 — Backend Node.js

54. **CRUD de Usuários** — criar, listar, editar e excluir usuários.
55. **CRUD de Produtos** — gerenciamento de produtos.
56. **Login JWT** — autenticação por token.
57. **Middleware de Auth** — proteger rotas privadas.
58. **Rate Limiter** — limitar requisições.
59. **Logger de Requisições** — registrar logs da API.
60. **Upload de Arquivos** — enviar arquivos ao servidor.
61. **Usuário/Post Relacionado** — criar relacionamento no banco.
62. **Sistema de Comentários** — comentários ligados a posts.
63. **Paginação no Banco** — retornar resultados por páginas.
64. **Soft Delete** — “deletar” sem apagar do banco.
65. **Sistema de Permissões** — controlar acessos.

---

## Nível 6 — Projetos Nível Mercado

66. **API de Streaming** — catálogo de filmes/séries.
67. **API de Biblioteca** — empréstimo de livros.
68. **API Ecommerce** — produtos, carrinho e pedidos.
69. **Encurtador de URL** — links curtos tipo bit.ly.
70. **Gerenciador de Tarefas** — sistema completo de produtividade.
71. **Clone do Notion** — editor com blocos.
72. **Clone do Discord** — chat com canais.
73. **Sistema de Chamados** — tickets de suporte.
74. **SaaS com Assinatura** — sistema com planos pagos.
75. **Plataforma de Cursos** — aulas e progresso.
76. **Sistema de Agendamento** — reservas e horários.
77. **Dashboard Admin** — painel administrativo.
78. **Gerenciador Financeiro** — controle financeiro completo.

---

## Nível 7 — Avançado

79. **Dockerizar App** — rodar projeto com Docker.
80. **Redis Cache** — acelerar consultas.
81. **Fila com BullMQ** — processar tarefas em background.
82. **WebSocket** — comunicação em tempo real.
83. **CI/CD Simples** — automação de deploy.
84. **Docker Compose** — orquestrar múltiplos serviços.
85. **Mini Express** — criar framework parecido com Express.
86. **Mini React** — recriar parte do React.
87. **ORM Simples** — abstrair queries do banco.
88. **Parser Markdown** — converter markdown em HTML.
89. **Bundler Simples** — juntar arquivos JS.
90. **OAuth** — login com Google/GitHub.
91. **RBAC** — sistema de permissões por cargo.
92. **WebSocket Server do Zero** — criar servidor realtime sem biblioteca.