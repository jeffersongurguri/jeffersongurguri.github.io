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
        matriz.push(palavras) // [ ["Mas", "Livrai-nos", "do", "Dump,"] ]
    }
    return matriz // vetor de vetores
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
        let divnode = document.createElement('div')
        divnode.classList.add('segredo')
        
        divnode.onmouseenter = onSegredoMouseEnter
        divnode.onmouseleave = onSegredoMouseLeave

        for (let palavra of linha) {
            let spannode = document.createElement('span')
            
            spannode.classList.add('palavra-omitida')
            
            let espaconode = document.createElement('span')
            
            espaconode.classList.add('espaco')
            
            espaconode.innerText= " "
            spannode.innerText = palavra
            
            divnode.appendChild(spannode)
            divnode.appendChild(espaconode)
        }
        container.appendChild(divnode)
    }
}

function setup() {
    console.log("running")
    let mainContent = document.getElementById('main-content')
    let linhas = particionarEmPalavras(secreto)
    configurarPalavras(linhas, mainContent)
}

