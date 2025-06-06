// comente essa web component utilizando jsdoc 
/**
 * @class Atividade
 * @extends HTMLElement
 * @description Componente personalizado para exibir atividades com estilo e interatividade.
 * @property {string} horario - Horário da atividade.
 * @property {string} titulo - Título da atividade.
 * @property {string} descricao - Descrição da atividade.
 * @property {string} tipo - Tipo da atividade (normal, destaque, intervalo, workshop, apresentacao).
 * @example
 * <atividade-item horario="10:00 - 11:00" titulo="Sessão de Abertura" descricao="Bem-vindo ao evento!" tipo="destaque"></atividade-item>
 * @fires atividade-click - Evento disparado ao clicar na atividade, contendo detalhes da atividade.
 * @listens atividade-click - Evento customizado que pode ser escutado para capturar a interação do usuário.
 */

class Atividade extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.render();
    }

    static get observedAttributes() {
        return ['horario', 'titulo', 'descricao', 'tipo'];
    }

    connectedCallback() {
        this.render();
        this.addInteractivity();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const horario = this.getAttribute('horario') || '00:00 - 00:00';
        const titulo = this.getAttribute('titulo') || 'Título da Atividade';
        const descricao = this.getAttribute('descricao') || '';
        const tipo = this.getAttribute('tipo') || 'normal';

        this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            display: block;
                            margin-bottom: 20px;
                        }

                        .program-item {
                            background: ${this.getBackgroundColor(tipo)};
                            border-radius: 12px;
                            padding: 25px;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            cursor: pointer;
                            position: relative;
                            overflow: hidden;
                            border-left: 4px solid ${this.getBorderColor(tipo)};
                            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                        }

                        .program-item::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                            transform: translateX(-100%);
                            transition: transform 0.6s;
                        }

                        .program-item:hover {
                            transform: translateY(-5px) scale(1.02);
                            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
                            background: ${this.getHoverColor(tipo)};
                        }

                        .program-item:hover::before {
                            transform: translateX(100%);
                        }

                        .program-time {
                            font-size: 0.9em;
                            font-weight: 600;
                            color: ${this.getTimeColor(tipo)};
                            margin-bottom: 12px;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                        }

                        .program-time::before {
                            content: '🕐';
                            font-size: 1.1em;
                            filter: ${this.getIconFilter(tipo)};
                        }

                        .program-title {
                            font-size: 1.3em;
                            font-weight: 700;
                            color: ${this.getTitleColor(tipo)};
                            margin-bottom: 15px;
                            line-height: 1.3;
                            display: flex;
                            align-items: center;
                            gap: 12px;
                        }

                        .program-title::before {
                            content: '${this.getIcon(tipo)}';
                            font-size: 1.2em;
                            opacity: 0.8;
                        }

                        .program-description {
                            font-size: 1em;
                            line-height: 1.6;
                            color: ${this.getDescriptionColor(tipo)};
                            margin: 0;
                        }

                        .tipo-badge {
                            position: absolute;
                            top: 15px;
                            right: 15px;
                            background: ${this.getBadgeColor(tipo)};
                            color: white;
                            padding: 4px 12px;
                            border-radius: 20px;
                            font-size: 0.75em;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            opacity: ${tipo === 'normal' ? '0' : '1'};
                            transition: opacity 0.3s;
                        }

                        @media (max-width: 768px) {
                            .program-item {
                                padding: 20px;
                            }
                            
                            .program-title {
                                font-size: 1.1em;
                            }
                            
                            .program-time {
                                font-size: 0.85em;
                            }
                            
                            .program-description {
                                font-size: 0.9em;
                            }
                        }

                        @keyframes pulse {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0.7; }
                        }

                        .program-item.destaque {
                            animation: pulse 3s infinite;
                        }
                    </style>

                    <div class="program-item ${tipo}">
                        <div class="tipo-badge">${this.getBadgeText(tipo)}</div>
                        <div class="program-time">${horario}</div>
                        <div class="program-title">${titulo}</div>
                        <div class="program-description">${descricao}</div>
                    </div>
                `;
    }

    getBackgroundColor(tipo) {
        const colors = {
            'normal': '#ffffff',
            'destaque': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'intervalo': 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
            'workshop': 'linear-gradient(135deg, #55a3ff 0%, #003d82 100%)',
            'apresentacao': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        };
        return colors[tipo] || colors.normal;
    }

    getHoverColor(tipo) {
        const colors = {
            'normal': 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            'destaque': 'linear-gradient(135deg, #7b68ee 0%, #8a2be2 100%)',
            'intervalo': 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
            'workshop': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'apresentacao': 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)'
        };
        return colors[tipo] || colors.normal;
    }

    getBorderColor(tipo) {
        const colors = {
            'normal': '#3498db',
            'destaque': '#8e44ad',
            'intervalo': '#f39c12',
            'workshop': '#2980b9',
            'apresentacao': '#1abc9c'
        };
        return colors[tipo] || colors.normal;
    }

    getTimeColor(tipo) {
        return ['destaque', 'workshop'].includes(tipo) ? '#ffffff' : '#7f8c8d';
    }

    getTitleColor(tipo) {
        return ['destaque', 'workshop'].includes(tipo) ? '#ffffff' : '#2c3e50';
    }

    getDescriptionColor(tipo) {
        return ['destaque', 'workshop'].includes(tipo) ? 'rgba(255,255,255,0.9)' : '#34495e';
    }

    getBadgeColor(tipo) {
        const colors = {
            'destaque': '#e74c3c',
            'intervalo': '#f39c12',
            'workshop': '#9b59b6',
            'apresentacao': '#1abc9c'
        };
        return colors[tipo] || '#3498db';
    }

    getBadgeText(tipo) {
        const texts = {
            'destaque': 'Destaque',
            'intervalo': 'Pausa',
            'workshop': 'Workshop',
            'apresentacao': 'Apresentação'
        };
        return texts[tipo] || '';
    }

    getIcon(tipo) {
        const icons = {
            'normal': '📋',
            'destaque': '⭐',
            'intervalo': '☕',
            'workshop': '🛠️',
            'apresentacao': '🎯'
        };
        return icons[tipo] || icons.normal;
    }

    getIconFilter(tipo) {
        return ['destaque', 'workshop'].includes(tipo) ? 'brightness(0) invert(1)' : 'none';
    }

    addInteractivity() {
        const item = this.shadowRoot.querySelector('.program-item');

        item.addEventListener('click', () => {
            // Efeito de ripple
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                        position: absolute;
                        border-radius: 50%;
                        background: rgba(255,255,255,0.6);
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        pointer-events: none;
                        left: 50%;
                        top: 50%;
                        width: 100px;
                        height: 100px;
                        margin-left: -50px;
                        margin-top: -50px;
                    `;

            const style = document.createElement('style');
            style.textContent = `
                        @keyframes ripple {
                            to {
                                transform: scale(4);
                                opacity: 0;
                            }
                        }
                    `;

            this.shadowRoot.appendChild(style);
            item.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
                style.remove();
            }, 600);

            // Dispara evento customizado
            this.dispatchEvent(new CustomEvent('atividade-click', {
                detail: {
                    horario: this.getAttribute('horario'),
                    titulo: this.getAttribute('titulo'),
                    descricao: this.getAttribute('descricao'),
                    tipo: this.getAttribute('tipo')
                },
                bubbles: true
            }));
        });

        // Efeito de hover suave
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
}


customElements.define('atividade-item', Atividade);

// // Event listener para demonstrar a funcionalidade
// document.addEventListener('atividade-click', (e) => {
//     console.log('Atividade clicada:', e.detail);
//     alert(`Atividade: ${e.detail.titulo}\nHorário: ${e.detail.horario}\n\n${e.detail.descricao}`);
// });