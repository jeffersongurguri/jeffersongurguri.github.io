function toogleDesc(ev) {
  let btn = ev.target;
  let p = btn.nextElementSibling;

  console.log('clicado');
  if ( p.classList.contains('esconder')) {
    p.classList.remove('esconder');
  } else {
    p.classList.add('esconder');
  }
}

class ExerciseItem extends HTMLElement {
  constructor() {
    super();

    // Cria o shadow DOM
    this.attachShadow({ mode: 'open' });

    // Cria os elementos do componente
    this.shadowRoot.innerHTML = `
      <style>
        .exercise-item {
          background-color: #fff;
          border-radius: 5px;
          margin-bottom: 10px;
          padding: 15px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .exercise-item:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .exercise-item h2 {
          color: #333;
          margin-top: 0;
        }

        .exercise-item p {
          color: #666;
          margin-bottom: 10px;
        }

        .botao {
          color: #fff;
          padding: 8px 15px;
          text-decoration: none;
          border-radius: 3px;
          transition: background-color 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .botao.detalhes-fechados {
          background-color: red;
        }
        .botao.detalhes-abertos {
          background-color: green;
        }
          

        .botao:hover {
          background-color: yellow;
          color: black;
        }

        .detalhes {
          display: block;
          margin-top: 10px;
        }

        .detalhes.hide {
          display: none;
        }
        
        .descricao {
          font-weight: bold;
        }

      </style>

      <li class="exercise-item">
        <h2><slot name="title"></slot></h2>
        <p class="descricao"><slot name="description"></slot></p>
        <button class="botao detalhes-abertos">Ver detalhes</button>
        <p class="detalhes">
          <slot name="details">Não há detalhes.</slot>
        </p>
      </li>
    `;

    // Adiciona o evento de clique ao botão
    this.shadowRoot.querySelector('.botao').addEventListener('click', (ev) => {
      this.shadowRoot.querySelector('.detalhes').classList.toggle('hide');
      ev.target.classList.toggle('detalhes-fechados');
      ev.target.classList.toggle('detalhes-abertos');
    });
  }
}

// Define o web component
customElements.define('exercise-item', ExerciseItem);