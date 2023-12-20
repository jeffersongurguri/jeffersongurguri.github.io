let textoSecreto = `"Sistema Operacional que estais na memória,\n
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


/**
 * A partir de uma string de múltiplas linhas retorna uma matriz (array de arrays) com strings contendo cada palavra
 * @param {string} texto - texto a ser particionado em uma matriz de palavras, cada linha numa array.
 * @returns matriz - um arrays de arrays, onde cada subarray é uma coleção da palavras.
 */
function particionarTextoComMatrizDePalavras(texto) {
    let matriz = [] // 
    let arrStrLinhas = texto.split('\n') // divida a string utilizando o caracter nova `\n` linha como separador.
    for (let strLinha of arrStrLinhas) { //para linha em formato de array
        let strPalavras = strLinha.split(' ') // particione a linha utilizando o caracter de espaço como separado.
        matriz.push(strPalavras) // Adiciona o array representando a linha atual na matriz.
    }
    return matriz
}

/**
 * Callback para responder ao evento de entrada do mouse na div
 * @param event - Evento
 */
function quandoMouseEntrarDiv(event) {
    let elemNodeFilhos = this.children

    for (let elemNodeFilho of elemNodeFilhos) {
        if (elemNodeFilho.classList.contains('espaco')) continue; // caso o filho seja um span contendo apenas um espaço, ignore
        elemNodeFilho.classList.remove('palavra-omitida') // remova a estilização que torna omitida a palavra
        elemNodeFilho.classList.add('palavra-revelada') // adicione a estilização que torna revelada a palavra
    }
}

/**
 * Callback para responder ao evento de saída do mouse na div
 * @param event - Evento
 * @see quandoMouseEntrarDiv
 */
function quandoMouseSaiDiv(event) {
    let elemNodeFilhos = this.children

    for (let elemNodeFilho of elemNodeFilhos) {
        if (elemNodeFilho.classList.contains('espaco')) continue; // caso o filho seja um span contendo apenas um espaço, ignore
        elemNodeFilho.classList.remove('palavra-relevada') // remove a estilização que torna relevada a palavra
        elemNodeFilho.classList.add('palavra-omitida') // adicione a estilização que torna omitida a palavra
    }
}

/**
 * Preenche a div de conteúdo com spans representados as palavras, linha a linha.
 * @param {*} matStrLinhas 
 * @param {*} divConteudo 
 */
function preencherDivPrincipal(matStrLinhas, divConteudo) {
    for (let arrStrLinha of matStrLinhas) {
        // criação de div que representa uma linha do texto
        let elemNodeDiv = document.createElement('div')

        // estilização para embelezamento apenas
        elemNodeDiv.classList.add('segredo')

        // Registrar manipuladores (callbacks) de evento
        elemNodeDiv.onmouseenter = quandoMouseEntrarDiv
        elemNodeDiv.onmouseleave = quandoMouseSaiDiv

        for (let strPalavra of arrStrLinha) {
            // criação de tag span que engloba a palavra.
            let elemNodeSpanPalavra = document.createElement('span')
            elemNodeSpanPalavra.classList.add('palavra-omitida')

            // criação de tag span que engloba um espaço em branco, separando as palavras
            let elemNodeSpanEspaco = document.createElement('span')
            elemNodeSpanEspaco.classList.add('espaco')
            elemNodeSpanEspaco.innerText = " "
            elemNodeSpanPalavra.innerText = strPalavra

            // Adicionar os spans a div que representa a linha
            elemNodeDiv.appendChild(elemNodeSpanPalavra)
            elemNodeDiv.appendChild(elemNodeSpanEspaco)
        }
        // Adicionar a div que representa uma linha a div que representa o conteúdo
        divConteudo.appendChild(elemNodeDiv)
    }
}

/**
 * Função Principal
 */
function setup() {
    console.log("Executando a aplicação web")
    let divPrincipal = document.getElementById('main-content')
    let linhasComoArrayDeSpans = particionarTextoComMatrizDePalavras(textoSecreto)
    preencherDivPrincipal(linhasComoArrayDeSpans, divPrincipal)
}

