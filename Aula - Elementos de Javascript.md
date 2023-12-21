---
share: "true"
---

## Comentários em JS

> Comentário são elementos textuais que são ignorados pelo interpretador (ou compilador) da linguagem.

## Comentário de uma única linha
```js
// Isso é um comentário de uma linha
```

## Comentário de múltiplas linhas
```js
/*
Isso é um comentário de múltiplas
linhas, onde podemos ter longos trechos de
comentário
*/

/*
* Isso também é um comentário de
* múltiplas linhas
*/
```

```js
100 + 2 // => 102

```

# Impressão no Console

```js
console.log(10.3) // => 10.2
console.log("um texto") // => "um texto"
console.log(true) // => true
console.log("Oi", "Mundo") // "Oi Mundo"
```

# Tipos de dados em JS

> JavaScript é uma linguagem de tipagem fraca e dinâmica

```js
let x = 2
x = "oi"
x = true
x = {nome:"jefferson"}
....
if (typeof(x) === "number") { // não sei se x é int, texto, booleano.
	// nesse contexto, eu sei que estou com um number.
}

console.log(x) // essa variavél ela é interpratada.
typeof(x) // => "Number"
```

## Tipos
```dirtree
- Tipos
	- Number
		- Inteiros (1, 2, 3)
		- Decimais (3.14, 2.783, 1.0e3)
	- String
		- 'com aspas simples'
		- "com aspas duplas"
		- \`com crases, especial por poder aparecer variáveis\`
	- Boolean
		- true
		- false
	- Especiais
		- null (não definido intencionalmente)
		- undefined (não definido - "alerta")
	- Objetos
		- Funções
		- Arrays
		- [...]
```

```js
objeto = new Objeto()
objeto.nome = null
console.log(Objeto.cor) // => undefined
```

# Definição de **variáveis**

<dt> <b>Escopo (Visibilidade) de uma variável</b> </dt>
<dd>Trecho do programa onde uma variável pode ser acessada</dd>

> Associado as ideias de private, public, protected.
> Onde eu posso acessar?
> Onde eu posso ver?
> Onde existe esse conceito?
> Quando a variável deixa de existir ou é destruída?

Em JS temos as seguintes palavras-chaves:

- `let`: possui escopo de bloco (modern JS).
- `const`: possui escopo de bloco e é constante (modern JS).
- `var`: possui escopo de função, caso dentro de uma função. Se fora de qualquer função a variável global.

```js
let var1 = 'oi'
const var2 = 'oi'
var var3 = 'oi'
```
## Palavras Reservadas
Em termos de visibilidade (escopo):
- (escopo de `let` = escopo de `const` ) $\leq$  escopo de `var`
- quando menor o escopo de uma variável, menos provável que você a 

# Escopo de Bloco
```js
{
	let novaVariavel = 3
	novaVariavel = novaVariavel * 2 // => 6.
}
console.log(novaVariavel) // Error!


{
	let y = 3
	const z = 4
	{
		let x = 2
		console.log(x)
	}
	console.log(x)
	console.log(y)
	z = 5 // erro, apesar de termos acesso a z, não podemos alterar o valor dele aqui.
}
console.log(x)
console.log(y)
```

## Escopo de função
```js
function minhaFuncao(x) {
	var novaVariavel = 10
	....
}
console.log(novaVariavel) // Error!
```

# Var, let e Const em escopo global

```js
// estou fora de qualquer função ou bloco
var x
let x
const x // apesar de ser global aqui, não pode ser modificado
```

## Contraste entre var e let 
#termo snippet: pequeno trecho de código
```js

function minhaFuncao(x) {
	{ // novo bloco
		let varDeBloco = 1
		var varDeFuncao = 2
	}
	console.log(varDeFuncao) // funciona
	console.log(varDeBloco) // não funciona, erro!
}

```

 >  Quando menor o tempo de vida, e/ou o escopo de uma variável, mais seguro é o código associado. (dica do tio da esquina)


# Operadores básicos

```js
if (a>1) {
	return "sim";
} else {
	return "não";
}

let resposta = (a>1)? "sim" : "não"

// 8 é par?
let x = 8
let resposta = ((x % 2) === 0)? "é par" : "é impar";

// no python 
// "é par" if ((x%2)==0) else "é ímpar"

// <condicao>?<valor_se_verdadeiro>:<valor_se_falso>

```

> 
```js 
let a = 2
let b = 3
a + b // soma => 5
a - b // subtração => -1
a * b // multiplicação => 6
a / b // divisão => 1.5
a % b // resto => 2
a ** b // a elevado a b => 8
a>1 ? "sim":"não" // operador ternário

// Operação com string (+) concatenação
let frase1 = "Oi"
let frase2 = " Mundo"
let fraseCompleta = frase1 + frase2 // => "oi Mundo"


// cuidado com as conversões automáticas (casting - cast)
let a = 2

console.log("5" - a) // => 2
// console.log (Number("5") - a) // => 3 // conversão automática.

console.log ("5" + a) // => "52"
// console.log (String(a) + "5") // => "52"
```

**Observação**
- Para evitar erros devido a conversões (*casting*), utilizamos o operador relacional `===` (estritamente igual) em comparações.

# Exercícios
## Exercício 1
### Resolução possível
> Escreva um programa que exiba "Olá, mundo!" no console.
```js
console.log("Olá, Mundo")
```

## Exercício 2
> Crie uma variável para a idade e exiba-a no console.

### Resolução possível
```js
let idade = 18
console.log(‘idade =’, idade)
```

## Exercícios 3
> Declare duas variáveis de texto e as concatene.

## Resolução possível
```js
const frase1 = "Estou aprendendo"
const frase2 = " Javascript"
const juncao = frase1 + frase2
console.log(juncao)
```

---

# Operações com Numbers
> Vamos utilizar os métodos do objeto global nativo `Math` para realizar operações mais complexas entre números:
- Operação piso, ou seja, o maior inteiro menor. =="Parecido com um arredondamento"== `Math.floor(3.14) // => 3`
- Operação teto, `Math.ceil(3.14) // => 4`
- `Math.cos(x)`
- `Math.sin(x)`
- `Math.PI`

```js
console.log(Math.cos(2))
```

> comentário sobre funções trigonométricas - seno, cosseno, tangente (sin, cos, tan) - como argumento um número em radianos e não em graus.

`Math.sin(90) // isso não é o seno de 90º, isso é o seno de 90 radianos`

# Template String

> `usando crase`

> As templates strings são uma solução para a composição de strings que possuem em sua composição valores associados a variáveis.
> 
> As templates strings evitam o uso da concatenação de strings

```js
const aluno = "Jefferson"
const nota = 10

const frase1 = ((aluno + " teve nota ") + nota) // "Jefferson teve nota 10"

const frase2 = `${aluno} teve nota ${nota}`

const meiaPassagem = 2
// interpolação
const frase3 = `o valor da meia é ${meiaPassagem} e a inteira é ${2*meiaPassagem}`
console.log(frase3) // "o valor da meia é 2 e a inteira é 4"

```



- onde aparece `${...}` podemos colocar variáveis ou expressões que serão interpretadas e cujos resultados irão fazer parte da string formada.
- uma **template string** pode se estender para além de uma linha.

# Exercício 4
> Escreva um programa que calcule a área de um retângulo (comprimento x largura) e exiba o resultado no console.

### Resolução possível
```js
// retânculo 4 x 2
const comprimento = 4
const largura = 2
const area = comprimento * largura
console.log(`Área do Retângulo ${comprimento} x ${largura}
	é: ${area}
	`)

```

# Manipulação de Arrays

**Arrays ou Vetores** são estruturas:
	- lineares (unidimensionais, *uma espécie de fila*), cujos valores são endereçados por índices (números naturais) a partir do zero (0).
		- `vetor[0], vetor[1], vetor[2]`
	- heterogêneas (*podem guardar informações de tipos diferentes ao mesmo tempo*)
		- `const vetor = [1, "oi", true]`
	- dinâmicas (podem crescer ou diminuir no decorrer da execução do programa)

```js
const vetor1 = [] // array vazio
const vetor2 = new Array() // array vazio

const vetor = [1, "oi", true, [2, "tchau"]]
vetor[0] // => 1
vetor[1] // => "oi"
vetor[3] // => o array [2, "tchau"]

vetor[2] = 'novo'
console.log(vetor)
// [1, "novo", true, [2, "tchau"]]
```

> Caso você tente acessar uma posição que não existe o interpretador retorna `undefined` e segue sem apresentar erros.

`vetor[666] // => undefined`

> Caso você atribua valor a uma posição do vetor que não está definida, você cria uma nova posição e as posições intermediárias não existentes são também criadas com valor `undefined`

```js
const v = ['a','b']
v[4] = 'e'
console.log(v)
// ['a','b',undefined,undefined,'e']

```

> **Arrays** são objetos e possuem seus próprios métodos:

```js
const vetor = []
vetor.push("oi") // adiciona ao final
console.log(vetor) // => ['oi']
```

Alguns métodos:
- `Array.push(x)` - adiciona ao final
- `Array.pop()` - remove do final
- `Array.unshift` - adiciona no início
- `Array.shift` - remove do início
- #todo Pesquise mais métodos disponíveis no objeto Array.
---

## Exercício 5
> Crie um array com nomes de frutas e exiba-os no console

## Resolução possível
```js
let vetor = ['maça', 'pera', 'kiwi', 'acerola']

// imprimir o array inteiro
console.log(vetor)
```

# Estruturas Condicionais e Laços

> Os laços em JavaScript são inspirados no Java, C++ e C.
> Dizemos que estruturas que seguem essas sintaxes (formas de escrever), parecidas ao C, são *C-like* (parecidas com C).

## Se (If)
```js
if(varInterpretadaComoBooleana) {
 // corpo a ser executado
}

if (outraVar) {
	// corpo
}else if (outraVar) {
	// corpo
} else {
	//corpo
}
 ```
``
- Para comparação de igualdades utilize o **operador de igualdade estrito** `===`

## `Switch`

```
switch(variavel) {
	case valor1:
		// corpo
	break;
	case valor 2:
		// corpo
	break;
	default:
		// corpo
}
```

# Exercício 6
## Resolução Possível

```js
const var1 = 27

/*
* Um número x é par se (x mod 2 = 0)
*/
if (var1 % 2 === 0) {
	console.log(`O valor ${var1} é par`)
} else {
	console.log(`O valor ${var1} é ímpar`)
}

```


# Callbacks
Em JavaScript, uma callback é uma função que é passada como argumento para outra função e é executada após a conclusão de uma operação assíncrona ou evento específico. Ela permite que certas ações sejam executadas quando uma operação demorada é finalizada, quando um evento ocorre ou quando uma requisição assíncrona é concluída.

As callbacks são fundamentais em JavaScript devido à sua natureza assíncrona e ao uso extensivo de operações como requisições de rede, manipulação de arquivos e interações do usuário.

Principais características das callbacks em JavaScript:

1. **Funções de ordem superior:** As funções podem receber outras funções como argumentos, o que as torna funções de ordem superior.

2. **Execução após o evento assíncrono:** As callbacks são executadas após a conclusão de uma operação assíncrona, como carregamento de dados de um servidor, manipulação de arquivos ou eventos do usuário, como cliques e teclas pressionadas.

3. **Tratamento de eventos:** São comumente utilizadas para manipular eventos, onde a função de callback é acionada quando um evento específico ocorre em um elemento HTML.

Exemplo de uso de callback:

```javascript
function operacaoAssincrona(dados, callback) {
    // Simulando uma operação assíncrona (exemplo com setTimeout)
    setTimeout(function() {
        // Após o término da operação assíncrona
        callback("Dados processados: " + dados);
    }, 1000); // Simula um atraso de 1 segundo
}

// Função callback passada como argumento
function minhaCallback(resultado) {
    console.log(resultado);
}

// Chamada da função com a callback
operacaoAssincrona("exemplo de dados", minhaCallback);
```

Neste exemplo, a função `operacaoAssincrona` recebe dois argumentos: `dados` e `callback`. Após uma simulação de operação assíncrona (representada pelo `setTimeout`), a função `callback` é invocada com os dados processados como parâmetro.

As callbacks são essenciais para lidar com operações assíncronas e eventos em JavaScript, permitindo a execução de código após a conclusão de determinadas ações, tornando o código mais eficiente e responsivo.