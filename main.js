// Dados das disciplinas organizados em COLUNAS para cada faixa
// Adicionado o campo 'semestre' baseado na posição da disciplina nas colunas visuais
import disciplinesData from "./data.json" with { type: "json" };


// Função para simular a navegação (em um ambiente real, isso mudaria a URL da página)
function navigateToUrl(url) {
    // Em um ambiente de navegador real, você usaria:
    // window.location.href = url;

    // Para este ambiente de pré-visualização, vamos apenas exibir o URL
    // em uma caixa de mensagem, pois a navegação real seria contida pelo iframe.
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50';
    messageBox.innerHTML = `
                    <div class="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm mx-auto">
                        <p class="text-lg font-semibold mb-4 text-gray-800">Simulando navegação para:</p>
                        <p class="text-md text-gray-700 mb-6 font-mono break-all">${url}</p>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                                onclick="this.closest('.fixed').remove()">
                            Fechar
                        </button>
                    </div>
                `;
    document.body.appendChild(messageBox);
}

// Função para criar o HTML das disciplinas em formato de colunas
function createDisciplinesHTML() {
    const container = document.createElement('div');
    container.className = "flex flex-col gap-8"; // Adiciona espaçamento entre as faixas

    disciplinesData.forEach(trackData => {
        const trackSection = document.createElement('div');
        trackSection.className = "mb-8";
        trackData.colorClass = trackData.track.toLowerCase();

        const trackTitle = document.createElement('h2');
        trackTitle.className = "track-title";
        trackTitle.textContent = trackData.track;
        trackSection.appendChild(trackTitle);

        const trackGrid = document.createElement('div');

        // Definindo 3 colunas fixas para cada track, como no diagrama original
        const numColumns = 3;
        trackGrid.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        // Adiciona a classe de borda específica para o grupo de botões do campus
        trackGrid.className = `track-grid ${trackData.colorClass}-border`;

        // Cria as colunas divs
        const columnsDivs = Array.from({ length: numColumns }, () => {
            const col = document.createElement('div');
            col.className = "grid-column";
            return col;
        });

        // Distribui as disciplinas nas colunas para tentar replicar o layout visual
        // usando o novo campo 'semestre' para alinhamento.
        trackData.disciplines.forEach((discipline) => {
            const button = document.createElement('div');
            button.className = `discipline-button ${trackData.colorClass}`;
            // Adiciona um span para o texto do botão, incluindo o semestre no formato (S#)
            button.innerHTML = `<span>${discipline.name} (S${discipline.semestre}) (${discipline.workload_ch}H)</span>`;
            // Ao clicar, chama a função navigateToUrl com a URL da disciplina
            button.onclick = () => navigateToUrl(discipline.url);

            // Usa o campo 'semestre' para colocar o botão na coluna correta (semestre - 1 para índice de array)
            if (discipline.semestre && discipline.semestre >= 1 && discipline.semestre <= numColumns) {
                columnsDivs[discipline.semestre - 1].appendChild(button);
            } else {
                // Fallback se 'semestre' não for válido, distribui como antes
                console.warn(`Semestre inválido para ${discipline.name}. Distribuindo por índice.`);
                columnsDivs[0].appendChild(button); // Coloca na primeira coluna
            }
        });

        columnsDivs.forEach(colDiv => trackGrid.appendChild(colDiv));

        trackSection.appendChild(trackGrid);
        container.appendChild(trackSection);
    });
    return container;
}

// Adiciona o conteúdo ao carregar a janela
window.onload = function () {
    const contentContainer = document.querySelector('.container-main');
    if (contentContainer) {
        contentContainer.appendChild(createDisciplinesHTML());
    }
};