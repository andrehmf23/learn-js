# learnjs
Reaprendendo o basico do js para relembrar frameworks web
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