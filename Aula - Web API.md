---
tags: []
footer: "@author jeffersongurguri@gmail.com"
share: "true"
---


# Web API

> Uma API (abreviação de  *Application Programming Interface*, em português "Interface de Programação de Aplicações") é um conjunto de regras, protocolos e ferramentas que permitem que diferentes softwares conversem entre si. Na perspectiva de desenvolvimento de software, o  termo API, se refere as especificações ("descrições de funcionamento") de variáveis, funções e objetos.


![[Recording 20231219142503.webm|Recording 20231219142503.webm]]

---
## Sistemas Operacionais e Navegadores, Qual a relação?
Sistemas Operacionais e os navegadores são componentes fundamentais em um ambiente computacional. Possuem propósitos e funcionalidades distintas. No entanto, existem algumas similaridades entre eles:
1. Interface com o usuário
2. Gerenciamento de recursos
3. Execução de aplicativos
4. Arquitetura de plugins/Extensões
5. Comunicação


Assim, como podemos utilizar serviços oferecidos pelo sistema operacional para complementar nossas aplicações desktop ou mobile. Podemos, também, solicitar serviços ao Navegador. Daí a importância se conhecermos os serviços disponíveis, ou seja, conhecer a API dos Navegadores, chamada corriqueiramente de **Web API**.


![[Recording 20231219144436.webm|Recording 20231219144436.webm]]

Empresas de tecnologia que mantêm (desenvolvem, evoluem e tendem os direitos de) Navegadores normalmente fornecem websites descrevendo a API deles. 
```ad-note
title: Visite Mnd Web Docs
A exemplo, aconselhamos aos nossos alunos que acessem, pesquisem e mergulhem fundo no site [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API)(mantido pela Mozilla - a desenvolvedora da Firefox) Atualmente, os serviços oferecidos, na perspectiva do desenvolvedor, são muito parecidas. De forma que podemos trabalhar com certa segurança, criando aplicações para quaisquer navegadores modernos disponíveis no mercado.

```


A seguir vamos explorar algumas funcionalidades que estão disponíveis para o Desenvolvedor Web. Para tal, iremos utilizar a linguagem JavaScript.

---


## Manipulação da DOM

- [[#Seleção de Elementos HTML|Seleção de Elementos HTML]]
- [[#Navegação na DOM|Navegação na DOM]]

Nessa seção vamos explorar algumas opções para manipular a estrutura de uma página web, ou mais formalmente, como podemos manipular o <strong title="Document Object Model (DOM)">Objeto Modelo do Documento</strong> (DOM).

Primeiro, vamos acordar o uso da seguinte marcação HTML. Lembrando que os códigos nessa nota de aula são intencionalmente triviais, para facilitar o processo de aprendizagem, focando apenas nos conceitos sendo trabalhados no momento.

```html
<div id="container"> 
	<div class="conteudo">
		<p> O conteudo do site </p>
	</div>
	<div class="rodape">
		Produzido por um desenvolvedor em treinamento
	</div>
</div>
```



![[Recording 20231219153216.webm|Recording 20231219153216.webm]]

---

Sabemos um documento web é estruturado pelo navegador como uma árvore (conceito de Teoria dos Grafos), a árvore DOM. 

Uma árvore é um modelo matemático, onde exibimos rapidamente a relação do tipo "faz parte", ou "está dentro de", entre outras. Normalmente, podemos representar visualmente esse modelo, através de pontos ou elipses (chamados nós da árvore) e por linhas unindo esses pontos (chamadas arestas).

Árvore são ótimas para representar a ideia de "está dentro de". Assim, podemos falar, no contexto de desenvolvendo web, que `<body>` está dentro de `<html>`, ou em termos de grafos, que `<body>` é filho (em inglês "child") de `<html>`.

Utilizando essa interpretação da estrutura de um documento HTML como uma modelo de árvore podemos utilizar as expressões:
 - Raiz ("*root*") do documento: O elemento (*tag*) que está mais externa possível.
 - Os filhos ("*children*") de um nó: os elementos que estão imediatamente dentro de um elemento.
 - Os descendentes ("*descendants*") de um nó: os elementos que de alguma forma estão dentro de um elemento.
 - Os irmãos ("*sibling*") de um nó: os elementos que estão no mesmo nível do elemento.
e vários outros termos cuja analogia é imediata.

![[Pasted image 20231219151727.png|Pasted image 20231219151727.png]]

```html
<body> 
	<p> oi </p>
</body>

```

Por convenção, em ambientes computacionais, ou temos apenas texto puro para trabalhar, podemos representar as árvores como estruturas de diretórios como visto a seguir.
```dirtree
- DIV id="container"
    - DIV class="conteudo"
        - #text:
        - P
            - #text: O conteudo do site
        - #text:
    - #text:
    - DIV class="rodape"
        - #text: Produzido por um desenvolvedor em treinamento
    - #text:
```

Os elementos (*tags*) HTML são representados na árvore DOM como nós que podem ser:
- Nós elementos - "Element Node": representam elementos html (ex.: `div,` `p`, `body`, `input`)
- Nós textuais - "Text Node": representando informação puramente textual (ou seja, não interpretado como marcação HTML).


![[Recording 20231219153531.webm|Recording 20231219153531.webm]]

### Seleção de Elementos HTML

> Selecionar um elemento html, no contexto de JavaScript, consiste em poder associar a uma variável Javascript a referência de algum nó ( seja ele *"ElementNode"* ou *"TextNode"* da árvore DOM) e assim podemos modificar programaticamente o conteúdo do documento web associado aquele elemento ou a nós ligados a ele (ex. filhos, pais, irmãos etc.).

> Existe uma íntima relação entre os métodos que permitem a seleção de Elementos HTML e as descrições de seletores de CSS. Assim, pressumimos que você ainda se lembra do tópico seletores CSS visto na disciplina de **Desenvolvimento Web 1**, mesmo assim vai uma sugestão aí para revisar com a [w3shools - CSS Selectos](https://www.w3schools.com/cssref/css_selectors.php).

Para selecionar elementos HTML em uma página da web, você pode utilizar diversos métodos oferecidos pelas linguagens como JavaScript, jQuery, entre outras. Aqui estão alguns dos métodos mais comuns e disponíveis na Web API nativa dos navegadores modernos:

 `document` : um objeto nativo e disponível na Web API.

1. **getElementById():** Este método é utilizado para selecionar um elemento HTML com base no valor do atributo `id`. Ele retorna o elemento que possui o ID especificado.

Exemplo:
```javascript
let elemento = document.getElementById("meuId");
```

2. **getElementsByClassName():** Esse método seleciona elementos com base no valor do atributo `class` e retorna uma lista de elementos que possuem a classe especificada.

Exemplo:
```javascript
let elementos = document.getElementsByClassName("minhaClasse");
```

3. **getElementsByTagName():** Este método seleciona elementos com base no nome da tag HTML e retorna uma lista de todos os elementos com essa tag.

Exemplo:
```javascript
let elementos = document.getElementsByTagName("div");
```

4. **querySelector():** Esse método permite selecionar elementos usando **seletores CSS**. Ele retorna o primeiro elemento que corresponde ao seletor especificado.

Exemplo:
```javascript
let elemento = document.querySelector("#meuId"); // Seleciona por ID
let elemento = document.querySelector(".minhaClasse"); // Seleciona por classe
let elemento = document.querySelector("div"); // Seleciona por tag
```

5. **querySelectorAll():** Similar ao `querySelector()`, mas retorna uma lista de todos os elementos que correspondem ao seletor especificado.

Exemplo:
```javascript
let elementos = document.querySelectorAll(".minhaClasse");
```

6. **Seletor de atributos:** O `querySelector()` e o `querySelectorAll()` também permitem selecionar elementos com base em atributos específicos.

Exemplo:
```javascript
let elementos = document.querySelectorAll("[data-atributo='valor']");
```

Além desses métodos nativos do JavaScript, muitos desenvolvedores também usam bibliotecas como jQuery para simplificar a seleção de elementos, oferecendo métodos como `$("#meuId")` ou `$(".minhaClasse")`, que funcionam de maneira semelhante aos métodos `getElementById()` e `getElementsByClassName()`, respectivamente.

### Navegação na DOM

Claro, existem vários métodos que permitem percorrer a árvore DOM de um documento web usando JavaScript. Aqui estão alguns dos métodos mais comuns:

1. **parentNode:** Este método retorna o nó pai do elemento atual na árvore DOM.

Exemplo:
```javascript
let paiDoElemento = elemento.parentNode;
```

2. **childNodes:** Retorna uma lista de nós filhos do elemento atual.

Exemplo:
```javascript
let listaDeFilhos = elemento.childNodes;
```

3. **children:** Retorna uma lista de nós filhos do elemento atual, excluindo nós de texto e comentários.

Exemplo:
```javascript
let listaDeFilhos = elemento.children;
```

4. **firstChild:** Retorna o primeiro nó filho do elemento atual.

Exemplo:
```javascript
let primeiroFilho = elemento.firstChild;
```

5. **lastChild:** Retorna o último nó filho do elemento atual.

Exemplo:
```javascript
let ultimoFilho = elemento.lastChild;
```

6. **nextSibling:** Retorna o próximo nó irmão do elemento atual.

Exemplo:
```javascript
let proximoIrmao = elemento.nextSibling;
```

7. **previousSibling:** Retorna o nó irmão anterior do elemento atual.

Exemplo:
```javascript
let irmaoAnterior = elemento.previousSibling;
```

## Manipulação do CSS

Na Web API, você pode manipular o CSS e as classes dos elementos HTML usando métodos que permitem adicionar, remover e manipular estilos e classes. Aqui estão alguns métodos comumente utilizados:

1. **style:**
   - Permite acessar e modificar propriedades CSS diretamente no estilo do elemento.

Exemplo:
```javascript
let elemento = document.getElementById('meuElemento');
elemento.style.color = 'blue';
elemento.style.fontSize = '16px';
```


2. **classList:**
   - **add():** Adiciona uma ou mais classes a um elemento.
   - **remove():** Remove uma ou mais classes de um elemento.
   - **toggle():** Adiciona uma classe se ela não estiver presente, remove se já estiver.
   - **contains():** Verifica se um elemento possui determinada classe.

Exemplo:
```javascript
let elemento = document.getElementById('meuElemento');
elemento.classList.add('novaClasse');
elemento.classList.remove('outraClasse');
elemento.classList.toggle('ativa');
let temClasse = elemento.classList.contains('minhaClasse');
```


3. **getAttribute e setAttribute:**
   - **getAttribute():** Obtém o valor de um atributo HTML específico.
   - **setAttribute():** Define ou altera o valor de um atributo HTML.

Exemplo:
```javascript
let elemento = document.getElementById('meuElemento');
let valorDoAtributo = elemento.getAttribute('data-info');
elemento.setAttribute('data-novo-atributo', 'valor');
```

Estes métodos permitem modificar os estilos CSS e as classes dos elementos HTML, proporcionando uma maneira de alterar a aparência e comportamento dos elementos na página web.

## Manipulação de Eventos

Na Web API, a manipulação de eventos usando métodos do tipo "on" pode ser realizada diretamente em elementos HTML para associar funções aos eventos específicos. Essa abordagem é comum e simplificada para adicionar manipuladores de eventos. Aqui estão alguns exemplos:

1. **Eventos embutidos no HTML:**
   - Você pode definir eventos diretamente nos atributos HTML dos elementos usando a sintaxe `on` seguida do nome do evento desejado.

Exemplo de HTML:
```html
<button id="meuBotao" onclick="minhaFuncao()">Clique em mim</button>
```

Exemplo de JavaScript:
```javascript
function minhaFuncao() {
    alert('O botão foi clicado!');
}
```

2. **Atribuição no JavaScript:**
   - Você também pode atribuir eventos diretamente em elementos HTML no JavaScript, referenciando o elemento e usando propriedades começando com "on" seguido do nome do evento.

Exemplo:
```javascript
let elemento = document.getElementById('meuBotao');
elemento.onclick = function() {
    alert('O botão foi clicado!');
};
```

3. **Remoção de manipuladores de eventos:**
   - É possível remover um manipulador de evento atribuído usando a mesma propriedade, atribuindo `null`.

Exemplo:
```javascript
var elemento = document.getElementById('meuBotao');
elemento.onclick = null; // Remove o manipulador de evento clicar
```

```ad-warning
Apesar de ser uma maneira rápida de associar eventos a elementos HTML, a utilização da abordagem "on" diretamente nos elementos pode tornar o código menos organizado e mais difícil de manter em projetos maiores. Em geral, a recomendação é usar `addEventListener` e `removeEventListener`, pois oferecem maior flexibilidade e melhor separação entre o JavaScript e o HTML, facilitando a manutenção do código.
```


Na Web API, você pode manipular eventos usando métodos para adicionar, remover e gerenciar event listeners, que são responsáveis por detectar e responder a eventos que ocorrem nos elementos HTML. Aqui estão os principais métodos relacionados à manipulação de eventos:

1. **addEventListener():**
   - Adiciona um ouvinte de eventos a um elemento HTML específico. Esse método permite definir uma função a ser executada quando um determinado evento ocorre.

Exemplo:
```javascript
var elemento = document.getElementById('meuElemento');
elemento.addEventListener('click', function(event) {
    // Ação a ser executada quando o evento de clique acontecer
});
```

2. **removeEventListener():**
   - Remove um ouvinte de eventos previamente adicionado a um elemento.

Exemplo:
```javascript
function minhaFuncao(event) {
    // Alguma ação
}

var elemento = document.getElementById('meuElemento');
elemento.addEventListener('click', minhaFuncao);

// Algum momento depois
elemento.removeEventListener('click', minhaFuncao);
```

3. **Event Target:**
   - Permite acessar o alvo (elemento) no qual o evento foi acionado.

Exemplo:
```javascript
document.addEventListener('click', function(event) {
    console.log(event.target); // Exibe o elemento clicado
});
```

4. **Event Object:**
   - Fornece informações sobre o evento ocorrido, como tipo de evento, alvo, coordenadas do mouse, teclas pressionadas, entre outros detalhes.

Exemplo:
```javascript
let elemento = document.getElementById('meuElemento');
elemento.addEventListener('mouseover', function(event) {
    console.log(event.type); // Tipo de evento ('mouseover')
    console.log(event.target); // Elemento que disparou o evento
    console.log(event.clientX, event.clientY); // Coordenadas do mouse
});
```

Esses métodos permitem interagir com eventos como cliques, mouseovers, teclas pressionadas, entre outros, proporcionando a capacidade de responder dinamicamente às ações do usuário na página da web.****