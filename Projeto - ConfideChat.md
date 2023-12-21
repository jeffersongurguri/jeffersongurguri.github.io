---
share: "true"
---


# Introdução

Como o nosso primeiro projeto de desenvolvimento web com JavaScript, no lado cliente, iremos reproduzir uma funcionalidade (*"feature"*) de um app de mensagens (similar ao Whatsapp) chamado Confide. Um dos diferenciais do [Confide](https://play.google.com/store/apps/details?id=cm.confide.android&hl=pt_BR&gl=US) são os recursos de privacidade. Nesse projeto iremos reproduzir o mecanismo de segurança contra "Shoulder surfing".

"Shoulder surfing" é uma técnica de ataque na segurança da informação na qual um indivíduo observa secretamente o que outra pessoa está fazendo em seu dispositivo eletrônico (como smartphone, tablet, laptop ou computador) ou em algum sistema informatizado, geralmente a partir de uma certa distância, por cima do ombro da pessoa, sem seu consentimento.

![[Pasted image 20231219174059.png|Pasted image 20231219174059.png]]
Na figura abaixo temos uma demonstração do uso da funcionalidade

<img src="https://i.insider.com/5358008a69beddfb43ca22a9" style="width: 80%; height: auto; max-width:618px; max-height:368 ">


# Nossa implementação

```ad-seealso
title: Veja funcionando...
**Acesse <https://jeffersongurguri.github.io/dw2/projetos/confide>**

```


# index.html

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" src="estilo.css">
    <script src="app.js"></script>
  </head>
  <body onload="setup()">
    <header>
        Chat confidencial - Projeto Avaliativo 1
    </header>
    <div class="container">
      <div id="main-content">
      </div>
    </div>
    <footer>
        Curso Técnico em Informática para Internet - IFCE - Campus Baturité
    </footer>
  </body>
</html>
```


# estilo.css
```css
body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  span {
    font-size: 1.5em;
  }
  .container {
    border: solid 1px black;
    display: block;
    justify-content: space-around;
    align-content: baseline;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  .palavra-omitida {
    border-radius: 5px;
    color: darkgreen;
    background-color: darkgreen;
  }

  .palavra-revelada {
    border-radius: 10px;
    background-color: #e6e6e6;
    color: darkgreen;
  }

  .segredo {
    /* border: solid 1px red; */
    background-color: white;
    margin-top: 0.6em;
  }/*# sourceMappingURL=estilo.css.map */

```

# app.js

``` javascript
let secreto = `"Sistema Operacional que estais na memória,\n
Compilado seja o vosso programa,\n
Venha à tela os vossos comandos,\n
Seja executada a nossa rotina,\n
Assim na memória, como na impressora.\n
Acerto nosso de cada dia, rodai hoje\n
Informai os nossos erros,\n
Assim como nós informamos o que está corrigido,\n
Não nos deixai entrar em looping,\n
Mas livrai-nos do Dump,\n
A main().`

  

function particionarEmPalavras(texto) {
    let matriz = []
    let linhas = texto.split('\n')
    for (let linha of linhas) {
        let palavras = linha.split(' ')
        matriz.push(palavras)
    }
    return matriz
}

function onSegredoMouseEnter(event) {
    let filhos = this.children
    for (let filho of filhos) {
        if (filho.classList.contains('espaco')) continue;
        filho.classList.remove('palavra-omitida')
        filho.classList.add('palavra-revelada')
    }
}
  

function onSegredoMouseLeave(event) {
    let filhos = this.children
    for (let filho of filhos) {
        if (filho.classList.contains('espaco')) continue;
        filho.classList.remove('palavra-revelada')
        filho.classList.add('palavra-omitida')
    }
}

  

function configurarPalavras(linhas, container) {
    for (let linha of linhas) {
        let pnode = document.createElement('div')
        pnode.classList.add('segredo')
        pnode.onmouseenter = onSegredoMouseEnter
        pnode.onmouseleave = onSegredoMouseLeave
        for (let palavra of linha) {
            let span = document.createElement('span')
            span.classList.add('palavra-omitida')
            let espaco = document.createElement('span')
            espaco.classList.add('espaco')
            espaco.innerText= " "
            span.innerText = palavra
            pnode.appendChild(span)
            pnode.appendChild(espaco)
        }
        container.appendChild(pnode)
    }
}

  

function setup() {
    console.log("running")
    let mainContent = document.getElementById('main-content')
    let linhas = particionarEmPalavras(secreto)
    configurarPalavras(linhas, mainContent)
}
```
